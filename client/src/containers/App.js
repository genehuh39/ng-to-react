import React from 'react';
import { connect } from 'react-redux';

import { deleteFighter, fetchFighters } from "../actions/fighterActions";
import ItemGrid from '../components/ItemGrid';

class App extends React.Component {
    constructor() {
        super();
        this.selectFighter = this.selectFighter.bind(this);
        this.deleteFighter = this.deleteFighter.bind(this);
    }
    componentDidMount() {
        this.props.fetchFighters();
    }
    selectFighter(id) {

    }
    deleteFighter(id) {
        this.props.deleteFighter(id);
    }
    render() {
        const { isFetching, fighters } = this.props;
        return (
            <div>
                {isFetching && <h2>Loading...</h2>}
                {!isFetching && fighters.length === 0 && <h2>Empty.</h2>}
                {!isFetching && fighters.length > 0 &&
                    <ItemGrid
                        fighters={fighters}
                        selectFighter={this.selectFighter}
                        deleteFighter={this.deleteFighter} />
                }
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

const mapDispatchToProps = dispatch => {
    return {
        fetchFighters() {
            dispatch(fetchFighters());
        },
        deleteFighter(id) {
            dispatch(deleteFighter(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
