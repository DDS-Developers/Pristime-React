// Components
import Master from "../components/Master";

// Dependencies
import Link from "next/link";
import { Col, Image, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

function Index() {
	const router = useRouter();

	const [content, setContent] = useState({
		image: "",
		title: "",
		copy_image: "",
	});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 100);
	}, []);

	useEffect(() => {
		var newContent;

		switch (router.query.type) {
			case "workaholic":
				newContent = {
					image: "/assets/images/R1.png",
					title: "SI WORKAHOLIC",
					copy_image: "/assets/images/COPY MOBILE1.png",
				};
				break;
			case "fomo":
				newContent = {
					image: "/assets/images/R2.png",
					title: "SI FOMO",
					copy_image: "/assets/images/COPY MOBILE2.png",
				};
				break;
			case "balance":
				newContent = {
					image: "/assets/images/R3.png",
					title: "SI BALANCE",
					copy_image: "/assets/images/COPY MOBILE3.png",
				};
		}

		setContent(newContent);
	}, [router.query.type]);

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
								/>
								<Row className="justify-content-center mb-3">
									<Col xs={10} lg>
										<Link href="/form">
											<motion.div
												className="rounded-pill bg-dark-green shadow py-1 py-lg-3 font-quick-sand-bold text-center font-size-14 cursor-pointer"
												whileHover={{ scale: 1.1 }}
												whileTap={{ scale: 1 }}
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
										</Link>
									</Col>
								</Row>
								{/* <Row className="justify-content-center align-items-center">
									<Col lg={5} className="mb-2 mb-lg-0">
										<div className="text-center color-green share-to">
											Share to:
										</div>
									</Col>
									<Col
										lg={4}
										className="d-flex justify-content-center justify-content-lg-start align-items-center"
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
											className="me-3"
										/>
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
										/>
									</Col>
								</Row> */}
							</Col>
						</Row>
					</Col>
				</Row>
			)}
		</Master>
	);
}

export default Index;