import { Link } from "gatsby";
import * as React from "react"

// styles 
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


const IndexPage = () => {

  return (
    <html lang="en">
    <head>
      <title>Python Quiz</title>
    </head>
    <body style={pageStyles}>

      <ul>
        <li><Link to="/catalog/byte">Catalog of quizzes</Link></li>
        <li><Link to="random/">Start quiz</Link></li>
      </ul>

    </body>
    </html>
  )
}

export default IndexPage