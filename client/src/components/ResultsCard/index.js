import React from 'react';
import './style.css';
import axios from 'axios';

class ResultsCard extends React.Component {
    state = {};

    componentWillMount() { 
        axios.get("https://www.googleapis.com/books/v1/volumes?q=coraline")
            .then((res) => {
                this.setState(
                    {
                        title: res.data.items[0].volumeInfo.title,
                        authors: res.data.items[0].volumeInfo.authors[0],
                        description: res.data.items[0].volumeInfo.description,
                        image: res.data.items[0].volumeInfo.imageLinks.smallThumbnail,
                        link: res.data.items[0].volumeInfo.infoLink,
                    }
                );
            })
    }

    render() {
        return (
            // <div className="container">
            <div className="row">
                <div id="results" className="col s12 m6">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Results</span>
                            <br />
                            <ul className="collection"> {
                                <li className="collection-item">
                                <div className="row">
                                    <h5 className="title">{this.state.title}</h5>
                                </div>
                                <div className="row">
                                    <span>Written By: {this.state.authors}</span>
                                </div>
                                <div className="row center-align">
                                    <img className="col" src={this.state.image} alt=""/>
                                    <p className="col s10">{this.state.description}</p>
                                </div>
                                </li>
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            // </div>
        )
    }
}

export default ResultsCard;