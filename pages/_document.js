import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

export default class Document extends NextDocument {
  static getInitialProps(ctx) {
    return NextDocument.getInitialProps(ctx)
  }

  render() {
    return (
      <Html lang='en'>
        <Head />
        <ColorModeScript />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
