import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="max-w-[1400px] mx-auto ">
        <Component {...pageProps} />
    </div>
  )
}

export default MyApp
