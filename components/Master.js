import Head from "next/head";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Script from "next/script";

function Master({ children }) {
	return (
		<React.Fragment>
			<Head>
				<title>Pristime! Pristine8.6+</title>
				<meta name="description" content="Pristime! Pristine8.6+" />
				<link rel="icon" href="/assets/images/pristine-8-6-logo.png" />
			</Head>
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-82VSCQ513F" />
			<Script
				id="google-analytics"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `window.dataLayer = window.dataLayer || [];
  							function gtag(){dataLayer.push(arguments);}
  							gtag('js', new Date());
							gtag('config', 'G-82VSCQ513F');`,
				}}
			/>
			<Container fluid style={{ height: "100vh" }}>
				<Row
					className="shadow bg-white position-relative"
					style={{ zIndex: 10 }}
				>
					<Col>
						<div className="py-2">
							<Image
								src="/assets/images/pristine-8-6-logo.png"
								alt="Pristine Logo"
								style={{ maxWidth: "60px", height: "auto" }}
							/>
						</div>
					</Col>
				</Row>
				{children}
			</Container>
		</React.Fragment>
	);
}

export default Master;
