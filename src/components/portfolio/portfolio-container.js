import React, { Component } from 'react';

import PortfolioItem from "./portfolio-items"

export default class portfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my Portfolio",
            data: [
                {title: "Quip" },
                {title: "Eventbrite" },
                {title: "Ministry Safe" }
            ]
        };

        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)
    }

    portfolioItems() {
        

       return this.state.data.map(item => {
           return <PortfolioItem title={item.title} url="google.com"/>;
       })
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Something Else"
        })
    }


    render() {
        return (
            <div className='portfolio-container'>
                <h2>{this.state.pageTitle}</h2>
                
                {this.portfolioItems()}

                <hr/>

                <button OnClick={this.handlePageTitleUpdate}>Change Title</button>
            </div>
        );
    }
}