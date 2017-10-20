import React from 'react';

const ItemGrid = props => {
    return (
        <div>
            <table className="item-grid table table-striped table-bordered table-hover table-responsive">
                <thead>
                    <tr>
                        <td colSpan="6">
                            <button type="button" className="btn btn-primary">
                                add new fighter
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Weight Class</th>
                        <th>Description</th>
                        <th>Rating</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {props.fighters.map((fighter, index) => {
                        return (
                            <tr key={fighter.lastName + index}>
                                <td>{fighter.firstName}</td>
                                <td>{fighter.lastName}</td>
                                <td>{fighter.weight}</td>
                                <td>{fighter.description}</td>
                                <td />
                                <td />
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ItemGrid;
