// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

// Scripts
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import GA4React from "ga-4-react";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		TagManager.initialize({ gtmId: "GTM-N4FBJD8" });

		async function initGA() {
			const ga4react = new GA4React("G-82VSCQ513F");

			try {
				const result = await ga4react.initialize();
				result.pageview("path");
				result.gtag("event", "pageview", "path");
			} catch (error) {
				console.log(error);
			}
		}

		initGA();
	}, []);

	return <Component {...pageProps} />;
}

export default MyApp;
