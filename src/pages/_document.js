import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    <Html lang="en" >
      <Head>
        <title>Next Shop</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  }
}