// Components
import Master from "../components/Master";

// Constants
import URL from "../constants/URL";

// Dependencies
import Link from "next/link";
import { Col, Image, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
import axios from "axios";

function Index() {
	useEffect(() => {
		async function getToken() {
			const url = `${URL.API}/bandung_submission/generate_token`;
			const result = await axios.get(url);

			setCookie("token", result.data.result.token);
		}

		if (hasCookie("token") === false) {
			getToken();
		}
	}, []);

	return (
		<Master>
			<Image
				src="/assets/images/HeaderWebNew.png"
				alt="Header Web"
				className="header-web d-none d-lg-block"
			/>
			<Image
				src="/assets/images/CoverBanner.png"
				alt="Header Mobile"
				className="header-web d-block d-lg-none"
			/>
			<Row className="justify-content-center bg-landing h-100">
				<Col lg={6} className="position-relative" style={{ zIndex: 1 }}>
					<Row className="justify-content-center">
						<Col xs={9} lg>
							<h1 className="text-center font-quick-sand-bold font-size-28">
								Mainkan quiz Pristime <br /> It&apos;s
								Pristine8.6+ Time versi Kamu!
							</h1>
						</Col>
					</Row>
					<Row className="justify-content-center">
						<Col xs={6} lg={4}>
							<Image
								src="/assets/images/Pristime_logo.png"
								alt="Pristime Logo"
								fluid
							/>
						</Col>
					</Row>
					<Row className="justify-content-center mb-2">
						<Col xs={9} lg={6}>
							<Image
								src="/assets/images/Cover.png"
								alt="Cover"
								fluid
							/>
						</Col>
					</Row>
					<Row className="justify-content-center mb-4">
						<Col xs={9} lg={10}>
							<div className="color-green text-center font-size-20">
								Dapatkan <strong>FREE STARTER KIT</strong>
								<br />
								di event Pristime, Ciwalk Bandung
							</div>
						</Col>
					</Row>
					<Row className="justify-content-center">
						<Col xs={7} lg={5} className="d-grid">
							<Link href="/question?number=1">
								<motion.div
									className="rounded-pill bg-light-green border-white text-center font-quick-sand-bold font-size-18 py-1 cursor-pointer"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 1 }}
								>
									MAIN SEKARANG!
								</motion.div>
							</Link>
						</Col>
					</Row>
				</Col>
			</Row>
		</Master>
	);
}

export default Index;
