import React, { Component } from 'react';

import PortfolioItem from "./portfolio-items"

export default class portfolioContainer extends Component {
    constructor() {
        super();

        console.log("portfolio container has been rendered")
    }

    portfolioItems() {
        const data = ["Quip", "Eventbrite", "Ministry Safe"];

       return data.map(item => {
           return <PortfolioItem title={item} url="google.com"/>;
       })
    }


    render() {
        return (
            <div className='portfolio-container'>
                <h2> Portfolio Items go here </h2>
                
                {this.portfolioItems()}
            </div>
        );
    }
}