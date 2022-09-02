import { Col, Image, Row } from "react-bootstrap";
import Master from "../components/Master";
import Link from "next/link";

function Index() {
	return (
		<Master>
			<Image
				src="/assets/images/HeaderWebNew.png"
				alt="Header Web"
				className="header-web"
			/>
			<Row className="justify-content-center bg-question h-100">
				<Col
					lg={10}
					className="position-relative"
					style={{ zIndex: 1 }}
				>
					<h1 className="text-center font-quick-sand-bold font-size-28">
						Wah beres gawe nih, lanjut ke mana ya?
					</h1>
					<Row className="justify-content-between">
						<Col lg={5}>
							<Link href="/result?type=balance">
								<a>
									<Image
										src="/assets/images/Q5A.png"
										alt="Q1A"
										fluid
									/>
								</a>
							</Link>
						</Col>
						<Col lg={5}>
							<Link href="/result?type=fomo">
								<a>
									<Image
										src="/assets/images/Q5B.png"
										alt="Q1A"
										fluid
									/>
								</a>
							</Link>
						</Col>
					</Row>
				</Col>
			</Row>
		</Master>
	);
}

export default Index;
