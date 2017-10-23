import React from 'react';
import ItemGridAddButton from './ItemGridAddButton';

const ItemGridHead = () => {
    return (
        <thead>
            <ItemGridAddButton />
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Weight Class</th>
                <th>Description</th>
                <th>Rating</th>
                <th />
            </tr>
        </thead>
    )
}

export default ItemGridHead;