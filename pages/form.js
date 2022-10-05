// Components
import Master from "../components/Master";
import InvitationModal from "../components/InvitationModal";

// Constants
import bandungPostalCode from "../constants/bandungPostalCode.json";
import URL from "../constants/URL";
import { err } from "../constants/messages";

// Dependencies
import { Col, Image, Row, Form, Spinner } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as yup from "yup";
import dynamic from "next/dynamic";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { hasCookie, getCookie, setCookie } from "cookies-next";
import axios from "axios";

const Select = dynamic(() => import("react-select"), {
	ssr: false,
});

const styles = {
	control: (provided, state) => ({
		...provided,
		borderRadius: "var(--bs-border-radius-pill) !important",
		paddingTop: ".1rem",
		paddingBottom: ".1rem",
		paddingLeft: ".2rem",
		border: "1px solid var(--green)",
		boxShadow: state.isFocused && "0 0 0 0.25rem rgba(23, 169, 156, 0.25)",
	}),
	dropdownIndicator: (provided) => ({
		...provided,
		color: "var(--green)",
	}),
	indicatorSeparator: (provided) => ({
		...provided,
		backgroundColor: "var(--green)",
	}),
	option: (provided, state) => ({
		...provided,
		color: "black",
		backgroundColor: state.isSelected && "var(--green)",
	}),
};

const schema = yup.object().shape({
	name: yup.string().required("Silakan isi nama kamu."),
	nik: yup
		.number("Silakan isi dengan No. KTP yang valid.")
		.required("Silakan isi No. KTP kamu."),
	email: yup
		.string()
		.email("Silakan isi dengan email yang valid.")
		.required("Silakan isi email kamu."),
	city: yup.string().required("Silakan isi kota/ kabupaten domisili kamu."),
	postal_code: yup
		.object()
		.required("Silakan pilih kode pos domisili kamu.")
		.nullable(),
	address: yup.string(),
	phone: yup.string().required("Silakan isi No. Whatsapp kamu."),
	accept_tnc: yup
		.bool()
		.oneOf(
			[true],
			"Pastikan kamu setuju dengan syarat & ketentuannya, ya."
		),
});

function FormPage() {
	const router = useRouter();

	const [postalCodes, setPostalCodes] = useState([]);
	const [invitationModalShow, setInvitationModalShow] = useState(false);
	const [submitLoading, setSubmitLoading] = useState(false);
	const [submitData, setSubmitData] = useState({});

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
		setValue,
	} = useForm({
		resolver: yupResolver(schema),
	});

	useEffect(() => {
		if (hasCookie("token") === false) {
			router.push("/");
		}

		const token = getCookie("token");
		const mappedPostalCodes = bandungPostalCode.data.map((row) => {
			return {
				value: row,
				label: row,
			};
		});

		setPostalCodes(mappedPostalCodes);
		setValue("token", token);
	}, []);

	const handleInvitationModalClose = () => {
		setInvitationModalShow(false);
	};

	const onSubmit = async (data) => {
		setSubmitLoading(true);

		const url = `${URL.API}/bandung_submission`;
		const mappedData = {
			...data,
			postal_code: data.postal_code.value,
		};

		try {
			const result = await axios.post(url, mappedData);

			setSubmitData(result.data.result);
			setSubmitLoading(false);
			setInvitationModalShow(true);
			setCookie("has_played", true);
			reset();
		} catch (error) {
			setSubmitLoading(false);

			var message = err;

			if (error.response) {
				switch (typeof error.response.data.message) {
					case "object":
						for (var key in error.response.data.message) {
							message = error.response.data.message[key];

							break;
						}
						break;
					default:
						message = error.response.data.message;
				}
			}

			alert(message);
		}
	};

	return (
		<React.Fragment>
			<Master>
				<Row className="fullwidth-row position-relative">
					<Image
						src="/assets/images/WebThank.png"
						alt="Web Thank You"
						fluid
						className="d-none d-lg-block"
					/>
					<Image
						src="/assets/images/UiThankUMobile.png"
						alt="Mobile Thank You"
						fluid
						className="d-block d-lg-none"
					/>
					<div
						className="position-absolute w-100 text-center scroll-ke-bawah"
						style={{ left: 0 }}
					>
						<a
							href="#form-row"
							className="d-flex justify-content-center"
						>
							<motion.div
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 1 }}
								style={{ width: "150px" }}
							>
								<Image
									src="/assets/images/Button_scroll.png"
									alt="Scroll Button"
									fluid
								/>
							</motion.div>
						</a>
					</div>
				</Row>
				<Row className="bg-form justify-content-center" id="form-row">
					<Col lg={8}>
						<Form onSubmit={handleSubmit(onSubmit)}>
							<input type="hidden" {...register("token")} />
							<div className="text-center color-green mb-3 font-size-20b">
								Isi data di bawah ini:
							</div>
							<div className="d-grid gap-2">
								<Row>
									<Form.Label className="col-4 col-lg-3 col-form-label color-green font-size-20b">
										Nama*
									</Form.Label>
									<Col xs lg>
										<div className="d-flex align-items-center">
											<Form.Label className="color-green me-3">
												:
											</Form.Label>
											<Form.Control
												type="text"
												className="rounded-pill py-lg-2 border-green"
												defaultValue=""
												{...register("name")}
											/>
										</div>
										{errors.name && (
											<Form.Text className="text-danger ms-4">
												{errors.name.message}
											</Form.Text>
										)}
									</Col>
								</Row>
								<Row className="align-items-center">
									<Form.Label className="col-4 col-lg-3 col-form-label color-green font-size-20b">
										No. KTP (NIK)*
									</Form.Label>
									<Col xs lg>
										<div className="d-flex align-items-center">
											<Form.Label className="color-green me-3">
												:
											</Form.Label>
											<Form.Control
												type="text"
												className="rounded-pill py-lg-2 border-green"
												defaultValue=""
												{...register("nik")}
											/>
										</div>
										{errors.nik && (
											<Form.Text className="text-danger ms-4">
												{errors.nik.message}
											</Form.Text>
										)}
									</Col>
								</Row>
								<Row className="align-items-center">
									<Form.Label className="col-4 col-lg-3 col-form-label color-green font-size-20b">
										Email*
									</Form.Label>
									<Col xs lg>
										<div className="d-flex align-items-center">
											<Form.Label className="color-green me-3">
												:
											</Form.Label>
											<Form.Control
												type="email"
												className="rounded-pill py-lg-2 border-green"
												defaultValue=""
												{...register("email")}
											/>
										</div>
										{errors.email && (
											<Form.Text className="text-danger ms-4">
												{errors.email.message}
											</Form.Text>
										)}
									</Col>
								</Row>
								<Row className="align-items-center">
									<Form.Label className="col-4 col-lg-3 col-form-label color-green font-size-20b">
										Kota/ Kabupaten*
									</Form.Label>
									<Col xs lg>
										<div className="d-flex align-items-center">
											<Form.Label className="color-green me-3">
												:
											</Form.Label>
											<Form.Control
												type="text"
												className="rounded-pill py-lg-2 border-green"
												defaultValue="Bandung"
												readOnly
												{...register("city")}
											/>
										</div>
										{errors.city && (
											<Form.Text className="text-danger ms-4">
												{errors.city.message}
											</Form.Text>
										)}
									</Col>
								</Row>
								<Row className="align-items-center">
									<Form.Label className="col-4 col-lg-3 col-form-label color-green font-size-20b">
										Kode Pos*
									</Form.Label>
									<Col xs lg>
										<div className="d-flex align-items-center">
											<Form.Label className="color-green me-3">
												:
											</Form.Label>
											<div className="flex-fill">
												<Controller
													control={control}
													name="postal_code"
													defaultValue={null}
													render={({
														field: {
															onChange,
															onBlur,
															value,
														},
													}) => (
														<Select
															options={
																postalCodes
															}
															onChange={onChange}
															onBlur={onBlur}
															value={value}
															styles={styles}
															placeholder="Silakan pilih ..."
														/>
													)}
												/>
											</div>
										</div>
										{errors.postal_code && (
											<Form.Text className="text-danger ms-4">
												{errors.postal_code.message}
											</Form.Text>
										)}
									</Col>
								</Row>
								<Row className="align-items-center">
									<Form.Label className="col-4 col-lg-3 col-form-label color-green font-size-20b">
										Alamat
									</Form.Label>
									<Col
										xs
										lg
										className="d-flex align-items-center"
									>
										<Form.Label className="color-green me-3">
											:
										</Form.Label>
										<Form.Control
											type="text"
											className="rounded-pill py-2 border-green"
											defaultValue=""
											{...register("address")}
										/>
									</Col>
								</Row>
								<Row className="align-items-center">
									<Form.Label className="col-4 col-lg-3 col-form-label color-green font-size-20b">
										No. Whatsapp*
									</Form.Label>
									<Col xs lg>
										<div className="d-flex align-items-center">
											<Form.Label className="color-green me-3">
												:
											</Form.Label>
											<Form.Control
												type="text"
												className="rounded-pill py-2 border-green"
												defaultValue=""
												{...register("phone")}
											/>
										</div>
										{errors.phone && (
											<Form.Text className="text-danger ms-4">
												{errors.phone.message}
											</Form.Text>
										)}
									</Col>
								</Row>
							</div>
							<Row className="justify-content-end py-3">
								<Col lg={9}>
									<div className="color-green font-size-12">
										*Wajib diisi
									</div>
								</Col>
							</Row>
							<Row className="justify-content-lg-end mb-3">
								<Col xs={10} lg={9}>
									<Form.Check
										label="Saya menyetujui untuk menerima segala bentuk info dan promosi dari Pristine8.6+ dalam bentuk email, panggilan, maupun SMS."
										className="color-green font-size-20b"
										id="accept-tnc"
										{...register("accept_tnc")}
									/>
									{errors.accept_tnc && (
										<Form.Text className="text-danger tnc-required">
											{errors.accept_tnc.message}
										</Form.Text>
									)}
								</Col>
							</Row>
							<Row className="justify-content-center">
								<Col xs={5} lg={3} className="d-grid">
									<motion.button
										type="submit"
										className="rounded-pill border-green bg-white color-green font-quick-sand-bold py-2 d-flex align-items-center justify-content-lg-center position-relative"
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 1 }}
										style={{ height: "36px" }}
										disabled={submitLoading}
									>
										<span className="font-size-20 ms-4 ms-lg-0">
											KIRIM
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
											{submitLoading ? (
												<Spinner
													as="span"
													animation="border"
													size="sm"
													role="status"
													aria-hidden="true"
												/>
											) : (
												<FontAwesomeIcon
													icon={faChevronRight}
													style={{
														height: "15px",
														width: "auto",
													}}
												/>
											)}
										</div>
									</motion.button>
								</Col>
							</Row>
						</Form>
					</Col>
				</Row>
			</Master>
			<InvitationModal
				show={invitationModalShow}
				onClose={handleInvitationModalClose}
				data={submitData}
			/>
		</React.Fragment>
	);
}

export default FormPage;
