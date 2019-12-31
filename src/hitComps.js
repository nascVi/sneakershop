import React, { Fragment } from "react"
import { Highlight, Snippet } from "react-instantsearch-dom"
import { Link } from "gatsby"
import { FaCalendar } from "react-icons/fa"
import { FaTags } from "react-icons/fa"

export const PageHit = clickHandler => ({ hit }) => (
    <div>
        <Link to={hit.slug} onClick={clickHandler}>
            <h4>
                <Highlight attribute="title" hit={hit} tagName="mark" />
            </h4>
        </Link>
        <Snippet attribute="excerpt" hit={hit} tagName="mark" />
    </div>
)

export const PostHit = clickHandler => ({ hit }) => (
    <div>
        <Link to={`/blog` + hit.slug} onClick={clickHandler}>
            <h4>
                <Highlight attribute="title" hit={hit} tagName="mark" />
            </h4>
        </Link>
        <div>
            <FaCalendar size="1em" />
            &nbsp;
      <Highlight attribute="date" hit={hit} tagName="mark" />
            &emsp;
      <FaTags size="1em" />
            &nbsp;
      {hit.tags.map((tag, index) => (
                <Fragment key={tag}>
                    {index > 0 && `, `}
                    {tag}
                </Fragment>
            ))}
        </div>
        <Snippet attribute="excerpt" hit={hit} tagName="mark" />
    </div>
)
