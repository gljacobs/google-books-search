import React from 'react';
import SearchCard from '../components/SearchCard';
import ResultsCard from '../components/ResultsCard';
import API from '../utils/API'

class Home extends React.Component {
    state = {
        books: []
    }

    handleSearch = (event, input) => {
        event.preventDefault();
        API.getBooks(input).then(res => this.setState(
            {
                books: res.data.items.filter(
                    result =>
                      result.volumeInfo.title &&
                      result.volumeInfo.infoLink &&
                      result.volumeInfo.authors &&
                      result.volumeInfo.description &&
                      result.volumeInfo.imageLinks &&
                      result.volumeInfo.imageLinks.thumbnail
                )          
            })
        );
    }

    render() {
        return (
            <div>
                <SearchCard handleSubmit={this.handleSearch}/>
                <ResultsCard books={this.state.books}/>
            </div>
        );
    }
}

export default Home;