// import Script from 'next/script';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import Header from '@components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      {/* <Script async src="googleanalyticsID" />*/}
      {/* <Script id="google-analytics" strategy="afterInteractive" >
        {`
          inner script for the gtag and config of google analytics`
        `}
      <Script /> */}
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
