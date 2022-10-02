// Components
import Master from "../components/Master";

// Constants
import URL from "../constants/URL";
import { err } from "../constants/messages";

// Dependencies
import { Col, Image, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { hasCookie } from "cookies-next";
import axios from "axios";

const upperCase = require("voca/upper_case");

function Result() {
	const router = useRouter();

	const [content, setContent] = useState({
		image: "",
		title: "",
		copy_image: "",
	});
	const [loading, setLoading] = useState(true);
	const [showStarterKitButton, setShowStarterKitButton] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 100);

		if (hasCookie("has_played")) {
			setShowStarterKitButton(false);
		}
	}, []);

	useEffect(() => {
		var newContent;

		switch (router.query.type) {
			case "workaholic":
				newContent = {
					image: "/assets/images/R1.png",
					title: "SI WORKAHOLIC",
					copy_image: "/assets/images/COPY MOBILE1.png",
					text: "Duh euy, gawe wae atuh. Gawe boleh tapi kesehatannya dijaga dong. Biasain Pristime dengan rutin minum Pristine8.6+ yuk mulai sekarang biar pH tubuh kamu jadi seimbang",
				};
				break;
			case "fomo":
				newContent = {
					image: "/assets/images/R2.png",
					title: "SI FOMO",
					copy_image: "/assets/images/COPY MOBILE2.png",
					text: "Hayuk, saeutik deui meureun buat jadi lebih baik. Bisa kok! Kuy, biasain Pristime bareng Pristine8.6+ tiap maraton series. Kamu refreshed, pH tubuh juga seimbang",
				};
				break;
			case "balance":
				newContent = {
					image: "/assets/images/R3.png",
					title: "SI BALANCE",
					copy_image: "/assets/images/COPY MOBILE3.png",
					text: "Asli keren euy! Kamu udah biasain Pristime pas nongkrong jeung barudak. Lanjutin terus ya kebiasaannya. Ajakin juga yang lainnya jaga keseimbangan pH tubuh bareng Pristine8.6+",
				};
		}

		setContent(newContent);
	}, [router.query.type]);

	const handleGetFreeStarterKitClick = async () => {
		const url = `${URL.API}/bandung_submission/get_total`;

		try {
			const result = await axios.get(url);

			if (result.data.result.total > 5000) {
				alert("Mohon maaf kuota telah habis 🙏");
			}

			router.push("/form");
		} catch (error) {
			var message = err;

			if (error.response) {
				message = error.response.data.message;
			}

			alert(message);
		}
	};
	const handleDownloadClick = async () => {
		const type = upperCase(router.query.type);
		const url = `${URL.API}/bandung_submission/download_result_image?result=${type}`;

		try {
			const result = await axios.get(url);
			const image = `data:image/png;base64,${result.data.result.image}`;
			const filenameArray = result.data.result.filename.split(".");
			const reactBase64Downloaded = await import(
				"react-base64-downloader"
			);

			reactBase64Downloaded.triggerBase64Download(
				image,
				filenameArray[0]
			);
		} catch (error) {
			var message = err;

			if (error.response) {
				message = error.response.data.message;
			}

			alert(message);
		}
	};

	return (
		<Master>
			<Image
				src="/assets/images/HeaderResWebNew.png"
				alt="Header Res"
				className="header-web d-none d-lg-block"
			/>
			<Image
				src="/assets/images/CoverBannerResult.png"
				alt="Header Result"
				className="header-result d-block d-lg-none"
			/>
			{loading === false && (
				<Row className="justify-content-center bg-result h-100">
					<Col
						lg={8}
						className="position-relative"
						style={{ zIndex: 1 }}
					>
						<Row className="result-content align-items-center justify-content-center">
							<Col xs={8} lg className="mb-4 mb-lg-0">
								<div className="d-block d-lg-none">
									<h2 className="font-quick-sand-bold color-dark-green text-center font-size-20">
										KAMU ADALAH
									</h2>
									<h1 className="font-quick-sand-bold color-dark-green text-center mb-4">
										{content.title}
									</h1>
								</div>
								<Image
									src={content.image}
									alt="Result Image"
									fluid
								/>
							</Col>
							<Col xs={11} lg>
								<div className="d-none d-lg-block">
									<h2 className="font-quick-sand-bold color-dark-green text-center font-size-20">
										KAMU ADALAH
									</h2>
									<h1 className="font-quick-sand-bold color-dark-green text-center mb-5">
										{content.title}
									</h1>
								</div>
								<Image
									src={content.copy_image}
									alt="Copy Image"
									fluid
									className="mb-4"
									data-text={content.text}
								/>
								{showStarterKitButton && (
									<Row className="justify-content-center mb-3">
										<Col xs={10} lg>
											<motion.div
												className="rounded-pill bg-dark-green shadow py-1 py-lg-3 font-quick-sand-bold text-center font-size-14 cursor-pointer"
												whileHover={{ scale: 1.1 }}
												whileTap={{ scale: 1 }}
												onClick={() =>
													handleGetFreeStarterKitClick()
												}
											>
												<span className="d-none d-lg-block">
													DAPATKAN FREE STARTER KIT DI
													SINI!
												</span>
												<span className="d-block d-lg-none">
													DAPATKAN FREE STARTER KIT
													<br />
													DI SINI!
												</span>
											</motion.div>
										</Col>
									</Row>
								)}
								<Row className="justify-content-center align-items-center">
									<Col lg={5} className="mb-2 mb-lg-0">
										<div className="text-center color-green share-to">
											Share to:
										</div>
									</Col>
									<Col
										lg={4}
										className="d-flex justify-content-center justify-content-lg-start align-items-center"
									>
										<motion.div
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 1 }}
											className="me-2 cursor-pointer"
										>
											<ReactSVG
												src="/assets/images/instagram-logo.svg"
												beforeInjection={(svg) => {
													svg.setAttribute(
														"fill",
														"var(--green)"
													);
													svg.setAttribute(
														"width",
														"32px"
													);
													svg.setAttribute(
														"height",
														"32px"
													);
												}}
												onClick={() =>
													handleDownloadClick()
												}
											/>
										</motion.div>
										<motion.div
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 1 }}
											className="cursor-pointer"
										>
											<ReactSVG
												src="/assets/images/facebook-logo.svg"
												beforeInjection={(svg) => {
													svg.setAttribute(
														"fill",
														"var(--green)"
													);
													svg.setAttribute(
														"width",
														"35px"
													);
													svg.setAttribute(
														"height",
														"35px"
													);
												}}
												onClick={() =>
													handleDownloadClick()
												}
											/>
										</motion.div>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
			)}
		</Master>
	);
}

export default Result;
