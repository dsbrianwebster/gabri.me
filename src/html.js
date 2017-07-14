// @flow
import React from 'react'
import cxs from 'cxs'
import Helmet from 'react-helmet'
import favicon from '../static/favicon.png'
import msTile from '../static/img/ms-logo.png'
import logo from '../static/img/logo.svg'
import appleIcon57 from '../static/apple-touch-icon-57x57-precomposed.png'
import appleIcon72 from '../static/apple-touch-icon-72x72-precomposed.png'
import appleIcon114 from '../static/apple-touch-icon-114x114-precomposed.png'
import { globalStyles } from './utils/style'

let stylesStr = ''
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

const appStyles = cxs.getCss()
const cssStr =
  process.env.NODE_ENV === `production`
    ? stylesStr + globalStyles + appStyles
    : globalStyles

export default class HTML extends React.Component {
  render() {
    const head = Helmet.rewind()
    const {
      author,
      description,
      social,
      twitter_id,
      url,
    } = require('../gatsby-config.js').siteMetadata

    return (
      <html lang="en">
        <head>
          <meta name="description" content={description} />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link
            rel="alternate"
            type="application/rss+xml"
            title={`${author} | Feed`}
            href={`${url}/feed/`}
          />
          <style
            id="gatsby-inlined-css"
            dangerouslySetInnerHTML={{ __html: cssStr }}
          />
          <link rel="shortcut icon" href={favicon} />
          <link
            type="text/plain"
            rel="author"
            href="https://plus.google.com/101787568188227600845/"
          />
          <meta name="application-name" content="Gabri.me" />
          <link name="msapplication-TileImage" href={msTile} />
          <link name="msapplication-TileColor" content="#1f2325" />
          <meta name="theme-color" content="#1f2325" />

          <link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            href={appleIcon114}
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href={appleIcon72}
          />
          <link rel="apple-touch-icon-precomposed" href={appleIcon57} />
          <link rel="logo" type="image/svg" href={logo} />
          <meta name="apple-mobile-web-app-title" content="Gabri.me" />
          <link
            rel="author"
            href="https://plus.google.com/101787568188227600845/posts"
          />

          <meta property="twitter:account_id" content={twitter_id} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content={social.twitter.url} />
          <meta name="twitter:domain" content={url} />

          {this.props.headComponents}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}