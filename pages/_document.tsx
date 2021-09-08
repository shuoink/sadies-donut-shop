import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document<{}> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return (
      <Html lang="en" className="p-0">
        <Head></Head>
        <body className="text-brand-blue-700 p-0 bg-gradient-to-br from-brand-blue-400 via-brand-blue-200 to-brand-blue-400 bg-fixed">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
