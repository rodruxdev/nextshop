import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" >
        <Head>
          <title>Next Shop</title>
          {/* <script async src="googleanalyticsID"><script /> */}
          {/* <script dangerouslySetInnerHTML={[
            __html: `inner script for the gtag and config of google analytics`
          ]} /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;