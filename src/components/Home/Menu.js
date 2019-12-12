import React, { Component } from 'react';
import Title from "../Globals/Title";
import Img from 'gatsby-image';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        console.log(props.items)
        this.state = {
            items: props.items.edges,
            shoesOneItems: props.items.edges
        };
    }
    render() {
        if (this.state.items.length > 0) {
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="the best sellers" />
                        {/* categories */}
                        {/* items */}
                        <div className="row">
                            {this.state.shoesOneItems.map(({ node }) => {
                                return (
                                    <div
                                        key={node.id}
                                        className="col-11 col-md-6 my-2 d-flex mx-auto"
                                    >
                                        <div>
                                            {/*       <Img fluid={node.image.fluid} />*/}
                                        </div>
                                        <div className="flex-grow-1 px-3">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-0">{node.title}</h6>
                                                <h6 className="text-yellow mb-0">€{node.price}</h6>
                                            </div>

                                            <p>
                                                <small>{node.description.description}</small>
                                            </p>
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-0">{node.size[0]}</h6>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="the best sellers" />
                        <div className="row">
                            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                                <h1>There are no items to display</h1>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}
