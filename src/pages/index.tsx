import * as React from "react"

import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
import 'highlight.js/styles/atom-one-dark.css';
hljs.registerLanguage('python', python);

// styles 
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}


const IndexPage = () => {
  const { testService } = require('../services/testService');

  return (
    <html lang="en">
    <head>
      <title>Home Page</title>
    </head>
    <body style={pageStyles}>

      <h1 style={headingStyles}>
        Test
      </h1>

      <pre class="language-python hljs">
        <code>
          <div id = "code">
          </div>
        </code>
      </pre>

      <input id="next" type="button" value="Start" onClick={() => {

          document.getElementById("code")!.innerHTML = hljs.highlight(testService.getTest(), {
            language: "python"
          }).value
          document.getElementById("next")!.defaultValue = "Next";

          testService.next()
        }}>
      </input>

    </body>
    </html>
  )
}

export default IndexPage
