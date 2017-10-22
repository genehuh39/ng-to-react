import React from 'react';
import ItemButtonBar from './ItemButtonBar';

const ItemRow = (props) => {
    return (
        <tr key={props.id}>
            <td>{props.fighter.firstName}</td>
            <td>{props.fighter.lastName}</td>
            <td>{props.fighter.weight}</td>
            <td>{props.fighter.description}</td>
            <td />
            <td><ItemButtonBar {...props} /></td>
        </tr>
    )
};

export default ItemRow;