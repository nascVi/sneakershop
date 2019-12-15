import React from 'react';
import Product from "./Product";
import Title from "../Globals/Title"
import { StaticQuery, grapql } from "gatsby";

export default function Products() {
    return (
        <StaticQuery query={} render={data => {
            return (<h1>Hello World!</h1>)
        }} />
    );
}
