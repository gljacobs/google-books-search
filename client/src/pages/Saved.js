import React from 'react';
import ResultsCard from '../components/ResultsCard';
// import API from '../utils/API'

class Saved extends React.Component {
    state = {
        saved: null,
    }

    // handleSearch = (event, input) => {
    //     event.preventDefault();
    //     API.getBooks(input).then(res => this.setState(
    //         {
    //             books: res.data.items.filter(
    //                 result =>
    //                   result.volumeInfo.title &&
    //                   result.volumeInfo.infoLink &&
    //                   result.volumeInfo.authors &&
    //                   result.volumeInfo.description &&
    //                   result.volumeInfo.imageLinks &&
    //                   result.volumeInfo.imageLinks.thumbnail
    //             )          
    //         })
    //     );
    // }

    render() {
        return (
            <div>
                <ResultsCard books={this.state.saved} saved={true}/>
            </div>
        );
    }
}

export default Saved;