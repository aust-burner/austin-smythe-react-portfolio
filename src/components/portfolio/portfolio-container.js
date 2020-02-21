import React, { Component } from 'react';

import PortfolioItem from "./portfolio-items"

export default class portfolioContainer extends Component {
    constructor() {
        super();
        
        console.log("portfolio container has been rendered")
    }


    render() {
        return (
            <div className='portfolio-container'>
                <h2> Portfolio Items go here </h2>
                <PortfolioItem />
            </div>
        );
    }
}