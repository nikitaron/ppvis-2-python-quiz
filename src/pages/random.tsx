import * as React from "react"

import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
import 'highlight.js/styles/atom-one-dark.css';
import { useEffect } from "react";
import highlightCode from '../utils/highlightCode'
import { Link } from "gatsby";

hljs.registerLanguage('python', python);

const RandomPage = () => {
  const { getRandomCodeService } = require('../services/getRandomCodeService');
  const [quiz, setQuiz] = React.useState(getRandomCodeService.next())

  useEffect(() => {
    highlightCode()
  })

  return (
    <main>
      <title>Python Quiz</title>
      <div>
        <div style={{float: 'left', 'font-size': '3vw', border: '20px'}}><Link to="/">...</Link></div>
        <h1>Что будет выведено этим кодом и почему?</h1>
      </div>
      <pre>
        <code style={{'font-size': '2vw'}}>
            {quiz}
        </code>
      </pre>
      <input id="next" type="button" value="Next" onClick={() => {
          setQuiz(getRandomCodeService.next())
        }}>
      </input>
    </main>
  )
}

export default RandomPage