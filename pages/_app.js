// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

// Scripts
import { store } from "../store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
