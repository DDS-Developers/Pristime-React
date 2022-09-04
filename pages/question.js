// Components
import Master from "../components/Master";

// Dependencies
import { Col, Image, Row } from "react-bootstrap";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function Question() {
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
					questionAText: "Apa aja di depan mata, kopi dan teh sikat!",
					questionBHref: "/question?number=3",
					questionBImage: "/assets/images/Q1B.png",
					questionBText: "Air putih atuh!",
				};
				break;
			case "2":
				newContent = {
					title: "Sebelum mandi, kamu biasanya ngapain?",
					questionAHref: "/question?number=4",
					questionAImage: "/assets/images/Q2A.png",
					questionAText: "Scroll socmed sambil rebahan",
					questionBHref: "/question?number=4",
					questionBImage: "/assets/images/Q2B.png",
					questionBText: "Pemanasan bentar, terus olahraga santai",
				};
				break;
			case "3":
				newContent = {
					title: "Sarapan dulu mereun. Menu pilihan kamu?",
					questionAHref: "/question?number=4",
					questionAImage: "/assets/images/Q3A.png",
					questionAText: "Bala-bala + cengek atuh, mantep pisan!",
					questionBHref: "/question?number=4",
					questionBImage: "/assets/images/Q3B.png",
					questionBText:
						"Buah-buahan, biar seger tambah sebotol Pristine8.6+",
				};
				break;
			case "4":
				newContent = {
					title: "Udah di kantor nih! Kebiasaan kamu di kantor ngapain aja?",
					questionAHref: "/question?number=5",
					questionAImage: "/assets/images/Q4A.png",
					questionAText:
						"Kerja efektif sesuai to-do-list, minum air putih cukup, dan rutin stretching",
					questionBHref: "/result?type=workaholic",
					questionBImage: "/assets/images/Q4B.png",
					questionBText:
						"Kerja sampai lupa waktu, lupa makan, dan lupa minum",
				};
				break;
			case "5":
				newContent = {
					title: "Wah beres gawe nih, lanjut ke mana ya?",
					questionAHref: "/result?type=balance",
					questionAImage: "/assets/images/Q5A.png",
					questionAText:
						"Nongkrong ah jeung barudak, minumnya Pristine8.6+",
					questionBHref: "/result?type=fomo",
					questionBImage: "/assets/images/Q5B.png",
					questionBText:
						"Maraton nonton series sambil ngemil martabak",
				};
		}

		setContent(newContent);
	}, [router.query.number]);

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
			{loading === false && (
				<Row className="justify-content-center bg-question h-100">
					<Col
						lg={10}
						xl={8}
						className="position-relative"
						style={{ zIndex: 1 }}
					>
						<Row className="justify-content-center">
							<Col xs={8} lg>
								<h1 className="text-center font-quick-sand-bold font-size-28b">
									{content.title}
								</h1>
							</Col>
						</Row>
						<Row className="justify-content-center justify-content-lg-between">
							<Col xs={9} lg={5} className="mb-4 mb-lg-0">
								<Link href={content.questionAHref}>
									<motion.div
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 1 }}
									>
										<Image
											src={content.questionAImage}
											alt="Question Image A"
											fluid
											data-text={content.questionAText}
										/>
									</motion.div>
								</Link>
							</Col>
							<Col xs={10} className="d-block d-lg-none mb-4">
								<div
									style={{
										height: "2px",
										borderBottom:
											"2px solid var(--light-green)",
									}}
								/>
							</Col>
							<Col xs={9} lg={5}>
								<Link href={content.questionBHref}>
									<motion.div
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 1 }}
									>
										<Image
											src={content.questionBImage}
											alt="Question Image B"
											fluid
											data-text={content.questionBText}
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

export default Question;
