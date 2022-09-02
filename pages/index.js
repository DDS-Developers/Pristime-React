import { Col, Image, Row } from "react-bootstrap";
import Master from "../components/Master";

function Index() {
	return (
		<Master>
			<Row className="justify-content-center bg-landing h-100">
				<Col lg={6}>
					<h1 className="my-5 text-center font-quick-sand-bold font-size-30">
						Mainkan quiz Pristime
						<br />
						It's Pristine8.6+ Time versi Kamu!
					</h1>
					<Row className="justify-content-center">
						<Col lg={4}>
							<Image
								src="/assets/images/Pristime_logo.png"
								alt="Pristime Logo"
								fluid
							/>
						</Col>
					</Row>
					<Row className="justify-content-center mb-2">
						<Col lg={6}>
							<Image
								src="/assets/images/Cover.png"
								alt="Cover"
								fluid
							/>
						</Col>
					</Row>
					<Row className="justify-content-center mb-4">
						<Col lg={10}>
							<div className="color-green text-center font-size-20">
								Dapatkan <strong>FREE STARTER KIT</strong>
								<br />
								di event Pristime, Ciwalk Bandung
							</div>
						</Col>
					</Row>
					<Row className="justify-content-center">
						<Col lg={5} className="d-grid">
							<a className="rounded-pill bg-light-green border-white text-center font-quick-sand-bold font-size-18 py-1">
								MAIN SEKARANG!
							</a>
						</Col>
					</Row>
				</Col>
			</Row>
		</Master>
	);
}

export default Index;
