// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

// Scripts
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import ReactGA from "react-ga4";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		TagManager.initialize({ gtmId: "GTM-N4FBJD8" });
		ReactGA.initialize("G-82VSCQ513F");
		ReactGA.send("pageview");
	}, []);

	return <Component {...pageProps} />;
}

export default MyApp;
