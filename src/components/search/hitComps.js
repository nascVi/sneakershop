import React from "react"
import { Highlight, Snippet } from "react-instantsearch-dom"
import { Link } from "gatsby"
import { MdFormatSize } from "react-icons/md"
import { FaTags } from "react-icons/fa"

export const ItemHit = clickHandler => ({ hit }) => (
  <div>
    <Link to={hit.title} onClick={clickHandler}>
      <h6>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h6>
    </Link>
    <Snippet attribute="size" hit={hit} tagName="mark" />
  </div>
)

export const ProductHit = clickHandler => ({ hit }) => (
  <div>
    <Link to={hit.title} onClick={clickHandler}>
      <h6>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h6>
    </Link>
    <div>
      <FaTags size="1em" />
      &nbsp;
      <Highlight attribute="size" hit={hit} tagName="mark" />
      &emsp;
      <MdFormatSize size="1em" />
      &nbsp;
      {/* {hit.size.map((size, index) => (
                <Fragment key={size}>
                    {index > 0 && `, `}
                    {size}
                </Fragment>
            ))} */}
    </div>
    <Snippet attribute="price" hit={hit} tagName="mark" />
  </div>
)
