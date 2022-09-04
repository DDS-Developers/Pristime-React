// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

// Scripts
import TagManager from "react-gtm-module";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		TagManager.initialize({ gtmId: "G-82VSCQ513F" });
	}, []);

	return <Component {...pageProps} />;
}

export default MyApp;
