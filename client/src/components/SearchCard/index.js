import React from 'react';
import './style.css';

function SearchCard() {
    return (
        // <div className="container">
        <div className="row">
            <div id="search" className="col s12 m6">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Book Search</span>
                        <br />
                        <form>
                            <div className="input-field">
                                <input id="book" type="text" className="validate" />
                                <label>Search here for books</label>
                            </div>
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default SearchCard;