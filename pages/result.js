// Components
import Master from "../components/Master";

// Dependencies
import Link from "next/link";
import { Col, Image, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
				className="header-web"
			/>
			{loading === false && (
				<Row className="justify-content-center bg-result h-100">
					<Col
						lg={8}
						className="position-relative"
						style={{ zIndex: 1 }}
					>
						<Row className="result-content align-items-center">
							<Col lg>
								<Image
									src={content.image}
									alt="Result Image"
									fluid
								/>
							</Col>
							<Col>
								<h2 className="font-quick-sand-bold color-dark-green text-center font-size-20">
									KAMU ADALAH
								</h2>
								<h1 className="font-quick-sand-bold color-dark-green text-center mb-5">
									{content.title}
								</h1>
								<Image
									src={content.copy_image}
									alt="Copy Image"
									fluid
									className="mb-4"
								/>
								<Link href="#">
									<motion.div
										className="rounded-pill bg-dark-green shadow py-2 font-quick-sand-bold text-center font-size-14  cursor-pointer"
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 1 }}
									>
										DAPATKAN FREE STARTER KIT DI SINI!
									</motion.div>
								</Link>
							</Col>
						</Row>
					</Col>
				</Row>
			)}
		</Master>
	);
}

export default Index;
