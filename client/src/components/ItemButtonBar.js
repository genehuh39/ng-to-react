import React from 'react';

const ItemButtonBar = ({ id, selectFighter, deleteFighter }) => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-sm btn-success" onClick={() => selectFighter(id)}>
                edit
            </button>
            <button type="button" className="btn btn-sm btn-danger" onClick={() => deleteFighter(id)}>
                delete
            </button>
        </div>
    );
};

export default ItemButtonBar;
