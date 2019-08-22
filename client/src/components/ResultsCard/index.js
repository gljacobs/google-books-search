import React from 'react';
import './style.css';

function ResultsCard(props) {

    return (
        <div className="row">
            <div id="results" className="col s12 m6">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Results</span>
                        <br />
                        {
                            props.books.map((book) => {
                                return(
                                    <ul className="collection">
                                        <li className="collection-item">
                                            <div className="row">
                                                <h5 className="title">{book.volumeInfo.title}</h5>
                                            </div>
                                            <div className="row">
                                                <span>Written By: {book.volumeInfo.authors.join(", ")}</span>
                                            </div>
                                            <div className="row center-align">
                                                <img className="col s2" src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                                                <p className="col s10">{book.volumeInfo.description}</p>
                                            </div>
                                        </li>
                                    </ul>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultsCard;