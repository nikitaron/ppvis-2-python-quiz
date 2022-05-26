import { graphql, Link } from "gatsby"
import * as React from "react"
import TagList from "../../components/tag_list"
import { useEffect } from "react"
import highlightCode from '../../utils/highlightCode'


export const query = graphql`
    query CodeList($tagx: String) {
        allTag(filter: {tagx: {eq: $tagx}}) {
        nodes {
            tagx
            code
            tag
            output
        }
        }
    }
`

const CatalogPage = ({ data }) => {
    useEffect(() => {
        highlightCode()
    })

    return (
        <main>
            <title>Quiz Catalog</title>
            <div>
                <div>
                    <div style={{ float: 'left', 'font-size': '3vw', border: '20px' }}><Link to="/">...</Link></div>
                    <h1>Catalog of quizzes</h1>
                </div>
                <div style={{ float: 'left', width: '30%' }}>
                    <TagList />
                </div>
                <div>
                    {data.allTag.nodes.map((element, index) => (
                        <div key={index.toString()}>
                            <pre><code>{element.code}</code></pre>
                            <pre><code>{element.output}</code></pre>
                            <ul>
                                {element.tag.map((t, i) => (
                                    <li key={i.toString()}>{t}</li>
                                ))}
                            </ul>
                            <hr />
                        </div>
                    ))
                    }
                </div>
            </div>
        </main>
    )
}

export default CatalogPage