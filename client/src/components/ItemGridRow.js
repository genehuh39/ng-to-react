import React from 'react';
import ItemButtonBar from './ItemButtonBar';

const ItemGridRow = (props) => {
    return (
        <tr key={props.fighter.id}>
            <td>{props.fighter.firstName}</td>
            <td>{props.fighter.lastName}</td>
            <td>{props.fighter.weight}</td>
            <td>{props.fighter.description}</td>
            <td />
            <td>
                <ItemButtonBar
                    id={props.fighter.id}
                    selectFighter={props.selectFighter}
                    deleteFighter={props.deleteFighter} />
            </td>
        </tr>
    )
};

export default ItemGridRow;