// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

// Scripts
import TagManager from "react-gtm-module";
import ReactGA from "react-ga";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		TagManager.initialize({ gtmId: "GTM-N4FBJD8" });
		ReactGA.initialize("G-82VSCQ513F");
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return <Component {...pageProps} />;
}

export default MyApp;
