import React from 'react';
import ItemGridHead from './ItemGridHead';
import ItemGridRow from './ItemGridRow';

const ItemGrid = (props) => {
    return (
        <div>
            <table className="item-grid table table-striped table-bordered table-hover table-responsive">
                <ItemGridHead />
                <tbody>
                    {props.fighters.map(fighter => {
                        return <ItemGridRow key={fighter.id} fighter={fighter} {...props} />
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ItemGrid;
