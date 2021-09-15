import React from 'react'

const images =
['images/robinhood/robinhood-landing.JPG',
'images/robinhood/robinhood-home.JPG',
'images/robinhood/robinhood-search.JPG',
'images/robinhood/robinhood-stock.JPG',
]


class MouseOver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: 'images/robinhood/robinhood-landing.JPG'
        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver(array) {
        // for(let i = 0; i < )
        this.setState({
            imgSrc: 'http://demo.sodhanalibrary.com/images/twitter_brown.png'
        });
    }

    handleMouseOut() {
        this.setState({
            imgSrc: 'http://demo.sodhanalibrary.com/images/twitter_blue.png'
        });
    }

    render() {
        return (
            <div>
                <img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc} />
            </div>
        );
    }

}

ExampleApplication.propTypes = {
}

ExampleApplication.defaultProps = {
}

export default ExampleApplication;
