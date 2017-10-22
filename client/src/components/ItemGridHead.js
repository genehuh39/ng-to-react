import React from 'react';

const ItemGridHead = () => {
    return (
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
    )
}

export default ItemGridHead;