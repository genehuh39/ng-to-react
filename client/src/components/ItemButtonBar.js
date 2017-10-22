import React from 'react';

const ItemButtonBar = (props) => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-sm btn-success" onClick={() => props.selectFighter(props.id)}>edit</button>
            <button type="button" className="btn btn-sm btn-danger" onClick={() => props.deleteFighter(props.id)}>delete</button>
        </div>
    )
}

export default ItemButtonBar;