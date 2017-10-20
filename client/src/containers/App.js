import React from 'react';
import { connect } from 'react-redux';

import ItemGrid from '../components/ItemGrid';

class App extends React.Component {
    render() {
        const { isFetching, fighters } = this.props;
        return (
            <div>
                {isFetching && <h2>Loading...</h2>}
                {!isFetching && fighters.length === 0 && <h2>Empty.</h2>}
                {!isFetching && fighters.length > 0 && <ItemGrid fighters={this.props.fighters} />}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        fighters: state.fighters || []
    };
};


export default connect(mapStateToProps)(App);
