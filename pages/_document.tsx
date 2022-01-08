import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="end" className="h-full">
        <Head>
          <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />

          <link
            rel="stylesheet"
            href="https://unpkg.com/react-leaflet-markercluster/dist/styles.min.css"
          />
        </Head>
        <body className="h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
