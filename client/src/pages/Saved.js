import React from 'react';
import ResultsCard from '../components/ResultsCard';
import API from '../utils/API'

class Saved extends React.Component {
    state = {
        saved: null,
    }

    componentDidMount() {
        this.getSavedBooks();        
    }

    getSavedBooks = () => {
        API.getSaved()
            .then(res =>
                this.setState({
                    saved: res.data
                })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <ResultsCard books={this.state.saved} saved={true} />
            </div>
        );
    }
}

export default Saved;