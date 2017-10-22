import React from 'react';

const ItemRow = ({ fighter, id }) => {
    return (
        <tr key={id}>
            <td>{fighter.firstName}</td>
            <td>{fighter.lastName}</td>
            <td>{fighter.weight}</td>
            <td>{fighter.description}</td>
            <td />
            <td />
        </tr>
    )
};

export default ItemRow;