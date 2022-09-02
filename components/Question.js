import { Col, Image } from "react-bootstrap";
import Link from "next/link";

function Question({ href, src, alt }) {
	return (
		<Col lg={5}>
			<Link href={href}>
				<a>
					<Image src={src} alt={alt} fluid />
				</a>
			</Link>
		</Col>
	);
}

export default Question;
