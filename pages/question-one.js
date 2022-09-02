// Components
import Master from "../components/Master";
import Header from "../components/Header";
import Title from "../components/Title";

// Dependencies
import { Col, Image, Row } from "react-bootstrap";
import Link from "next/link";

function Index() {
	return (
		<Master>
			<Header />
			<Row className="justify-content-center bg-question h-100">
				<Col
					lg={10}
					className="position-relative"
					style={{ zIndex: 1 }}
				>
					<Title label="Bangun tidur kamu pilih minum apa?" />
					<Row className="justify-content-between">
						<Col lg={5}>
							<Link href="/question-two">
								<a>
									<Image
										src="/assets/images/Q1A.png"
										alt="Q1A"
										fluid
									/>
								</a>
							</Link>
						</Col>
						<Col lg={5}>
							<Link href="/question-three">
								<a>
									<Image
										src="/assets/images/Q1B.png"
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
