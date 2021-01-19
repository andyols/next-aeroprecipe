import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

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
