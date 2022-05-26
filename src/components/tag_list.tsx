import { graphql, Link, useStaticQuery } from "gatsby"
import * as React from "react"

const TagList = () => {
    const data = useStaticQuery(graphql`
        query TagListQuery {
            allTag(sort: {fields: tagx}) {
            group(field: tagx) {
                totalCount
                fieldValue
            }
            }
        }
  `)

    return (
        <ul>
        {data.allTag.group.map((element, index) => (
            <li key={index.toString()}>
                <Link to={`/catalog/${element.fieldValue}`}>
                    {element.fieldValue} ({element.totalCount})
                </Link>
            </li>                 
        ))}
        </ul>
    )
}

export default TagList