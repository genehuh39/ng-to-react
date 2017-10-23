import React from 'react';
import ItemButtonBar from './ItemButtonBar';

const ItemGridRow = ({ fighter, selectFighter, deleteFighter }) => {
    return (
        <tr key={fighter.id}>
            <td>{fighter.firstName}</td>
            <td>{fighter.lastName}</td>
            <td>{fighter.weight}</td>
            <td>{fighter.description}</td>
            <td />
            <td>
                <ItemButtonBar id={fighter.id} selectFighter={selectFighter} deleteFighter={deleteFighter} />
            </td>
        </tr>
    );
};

export default ItemGridRow;
