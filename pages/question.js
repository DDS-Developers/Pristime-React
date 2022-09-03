// Components
import Master from "../components/Master";

// Dependencies
import { Col, Image, Row } from "react-bootstrap";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function Index() {
	const router = useRouter();

	const [loading, setLoading] = useState(true);
	const [content, setContent] = useState({
		title: "",
		questionAHref: "",
		questionAImage: "",
		questionBHref: "",
		questionBImage: "",
	});

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 100);
	}, []);

	useEffect(() => {
		var newContent;

		switch (router.query.number) {
			case "1":
				newContent = {
					title: "Bangun tidur kamu pilih minum apa?",
					questionAHref: "/question?number=2",
					questionAImage: "/assets/images/Q1A.png",
					questionBHref: "/question?number=3",
					questionBImage: "/assets/images/Q1B.png",
				};
				break;
			case "2":
				newContent = {
					title: "Sebelum mandi, kamu biasanya ngapain?",
					questionAHref: "/question?number=4",
					questionAImage: "/assets/images/Q2A.png",
					questionBHref: "/question?number=4",
					questionBImage: "/assets/images/Q2B.png",
				};
				break;
			case "3":
				newContent = {
					title: "Sarapan dulu mereun. Menu pilihan kamu?",
					questionAHref: "/question?number=4",
					questionAImage: "/assets/images/Q3A.png",
					questionBHref: "/question?number=4",
					questionBImage: "/assets/images/Q3B.png",
				};
				break;
			case "4":
				newContent = {
					title: "Udah di kantor nih! Kebiasaan kamu di kantor ngapain aja?",
					questionAHref: "/question?number=5",
					questionAImage: "/assets/images/Q4A.png",
					questionBHref: "/result?type=workaholic",
					questionBImage: "/assets/images/Q4B.png",
				};
				break;
			case "5":
				newContent = {
					title: "Wah beres gawe nih, lanjut ke mana ya?",
					questionAHref: "/result?type=balance",
					questionAImage: "/assets/images/Q5A.png",
					questionBHref: "/result?type=fomo",
					questionBImage: "/assets/images/Q5B.png",
				};
		}

		setContent(newContent);
	}, [router.query.number]);

	return (
		<Master>
			<Image
				src="/assets/images/HeaderWebNew.png"
				alt="Header Web"
				className="header-web"
			/>
			{loading === false && (
				<Row className="justify-content-center bg-question h-100">
					<Col
						lg={10}
						className="position-relative"
						style={{ zIndex: 1 }}
					>
						<h1 className="text-center font-quick-sand-bold font-size-28">
							{content.title}
						</h1>
						<Row className="justify-content-between">
							<Col lg={5}>
								<Link href={content.questionAHref}>
									<motion.div
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 1 }}
									>
										<Image
											src={content.questionAImage}
											alt="Question Image A"
											fluid
										/>
									</motion.div>
								</Link>
							</Col>
							<Col lg={5}>
								<Link href={content.questionBHref}>
									<motion.div
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 1 }}
									>
										<Image
											src={content.questionBImage}
											alt="Question Image B"
											fluid
										/>
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
