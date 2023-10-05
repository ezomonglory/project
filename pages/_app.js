import { ToastContainer } from "react-toastify";
import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }) {
	return (
		<div className='max-w-[1400px] mx-auto '>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				closeButton={true}
				draggable={true}
				pauseOnHover
				theme='dark'
			/>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
