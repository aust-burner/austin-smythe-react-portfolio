import React, { Component } from 'react';

import PortfolioItem from "./portfolio-items"

export default class portfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            data: [
                {title: "Quip" },
                {title: "Eventbrite" },
                {title: "Ministry Safe" }
            ]
        };
    }

    portfolioItems() {
        

       return this.state.data.map(item => {
           return <PortfolioItem title={item.title} url="google.com"/>;
       })
    }


    render() {
        return (
            <div className='portfolio-container'>
                <h2>{this.state.pageTitle}</h2>
                
                {this.portfolioItems()}
            </div>
        );
    }
}