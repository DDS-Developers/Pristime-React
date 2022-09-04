import { Modal, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

function InvitationModal({ show, onClose, data }) {
	const router = useRouter();

	const handleSelesaiClick = () => {
		onClose();

		router.push("/");
	};

	return (
		<Modal
			show={show}
			onHide={() => onClose()}
			size="lg"
			centered
			contentClassName="invitation-modal-content"
		>
			<Modal.Body className="p-lg-4">
				<div className="d-flex justify-content-between align-items-center">
					<div>
						<div className="color-green mb-lg-2 font-size-20b">
							UNIQUE CODE:
						</div>
						<div className="border-green-bold color-green font-quick-sand-bold text-center rounded-pill font-size-20b">
							{data.unique_code}
						</div>
					</div>
					<Image
						src="/assets/images/pristine-8-6-logo.png"
						alt="Pristine Logo"
						className="invitation-logo"
					/>
				</div>
				<Row className="justify-content-center mb-2 mb-lg-5">
					<Col
						xs={5}
						lg={4}
						className="d-flex justify-content-center"
					>
						<Image
							src="/assets/images/Pristime_logo.png"
							alt="Pristime Logo"
							fluid
						/>
					</Col>
				</Row>
				<Row className="justify-content-center mb-4">
					<Col xs={10} lg={4} className="py-3">
						<div className="font-quick-sand-bold color-dark-green font-size-15 mb-2 mb-lg-4 text-center">
							Congratulations!
						</div>
						<div className="font-quick-sand-bold color-dark-green text-center font-size-35 mb-3 border-bottom-green-dashed">
							{data.name}
						</div>
						<div className="text-center font-quick-sand-bold font-size-18 mb-4 color-dark-green line-height-25">
							Tukarkan unique code ini untuk bisa dapetin FREE
							STARTER KIT di event Pristime, It's Pristine 8.6+
							Time!
						</div>
						<Image
							src="/assets/images/popup_header_baru.png"
							alt="Invitation Schedule"
							fluid
						/>
					</Col>
					<Col lg={1}>
						<div className="invitation-separator" />
					</Col>
					<Col lg={4} className="py-lg-3">
						<div className="font-quick-sand-bold color-dark-green font-size-15 mb-3 text-center">
							Temukan juga semua keseruan:
						</div>
						<Image
							src="/assets/images/InvWebTangga.png"
							alt="Invitation Details"
							fluid
							className="d-none d-lg-block"
						/>
						<div className="px-4">
							<Image
								src="/assets/images/popup_succes_foter.png"
								alt="Invitation Details Mobile"
								fluid
								className="d-block d-lg-none mb-2"
							/>
							<div className="color-green font-size-10 text-center">
								*Live Music &amp; Snack Corner Only on Weekend
							</div>
						</div>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col xs={6} lg={3} className="d-grid">
						<motion.button
							className="rounded-pill border-green bg-white color-green font-quick-sand-bold d-flex align-items-center justify-content-lg-center position-relative"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 1 }}
							style={{ height: "36px" }}
							onClick={() => handleSelesaiClick()}
						>
							<span className="font-size-20 ms-2 ms-lg-0">
								SELESAI
							</span>
							<div
								className="rounded-circle bg-dark-green d-flex align-items-center justify-content-center color-white position-absolute"
								style={{
									height: "30px",
									width: "30px",
									top: "2px",
									right: "2px",
								}}
							>
								<FontAwesomeIcon
									icon={faChevronRight}
									style={{
										height: "15px",
										width: "auto",
									}}
								/>
							</div>
						</motion.button>
					</Col>
				</Row>
			</Modal.Body>
		</Modal>
	);
}

export default InvitationModal;
