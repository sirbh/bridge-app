// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add custom meta tags, stylesheets, or other elements here */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Virgilio</title>
          {/* Include external stylesheets if needed */}
          {/* <link rel="stylesheet" href="your-stylesheet.css" /> */}
        </Head>
        <body style={{margin:0}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
