import React from 'react';
import './style.css';

function ResultsCard(props) {


    return (
        // <div className="container">
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
                                                <img className="col s2" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} alt="" />
                                                <p className="col s10">{book.volumeInfo.description ? book.volumeInfo.description : "No description found.."}</p>
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
        // </div>
    )
}

export default ResultsCard;