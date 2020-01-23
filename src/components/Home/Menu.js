import React, { Component } from 'react';
import Title from "../Globals/Title";
import Img from "gatsby-image";
// import { all } from 'any-promise';

const getCategories = items => {
    let tempItems = items.map(items => {
        return items.node.category;
    });
    let tempCategories = new Set(tempItems);
    let categories = Array.from(tempCategories);
    categories = ['all', ...categories];
    return categories;

};
export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items.edges,
            shoesOneItems: props.items.edges,
            categories: getCategories(props.items.edges)
        };
    }
    handleItems = category => {
        let tempItems = [...this.state.items]
        if (category === "all") {
            this.setState(() => {
                return { shoesOneItems: tempItems }
            });
        } else {
            let items = tempItems.filter(({ node }) => node.category === category);
            this.setState(() => {
                return { shoesOneItems: items };
            });
        }
        // console.log(category);
    };
    render() {
        if (this.state.items.length > 0) {
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="Les marques" />
                        {/* categories */}
                        <div className="row mb-5">
                            <div className="col-10 mx-auto text-center">
                                {this.state.categories.map((category, index) => {
                                    return (
                                        <button
                                            type="button"
                                            key={index}
                                            className="btn btn-yellow text-capitalize m-3"
                                            onClick={() => {
                                                this.handleItems(category);
                                            }}
                                        >
                                            {category}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                        {/* items */}

                        <div className="row">
                            {this.state.shoesOneItems.map(({ node }) => {
                                return (

                                    <div className="col-11 col-md-6 my-2 d-flex mx-auto"
                                        key={node.id}

                                    >
                                        <div className="flex-grow-1 px-3">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-0">{node.title}</h6>
                                                <h6 className="text-yellow mb-0">{node.price}€</h6>
                                            </div>

                                            <p>
                                                <small>{node.description.description}</small>
                                            </p>
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-0">{node.size[0]}</h6>
                                            </div>

                                        </div>
                                        {/*No image?*/}
                                        <div className="flex-grow-1 px-3">
                                            <Img
                                                fluid={node.image}
                                            />
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
