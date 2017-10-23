import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as FighterActionCreators from '../actions/fighterActions';
import ItemGrid from '../components/ItemGrid';

class App extends Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        this.boundActionCreators = bindActionCreators(FighterActionCreators, dispatch);
    }
    componentDidMount() {
        const { dispatch } = this.props;
        const action = FighterActionCreators.fetchFighters();
        dispatch(action);

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
                        {...this.boundActionCreators} />
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

export default connect(mapStateToProps)(App);
