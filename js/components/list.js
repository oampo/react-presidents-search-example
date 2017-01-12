import React from 'react';

export default function List(props) {
    const items = props.items.map((item, index) => <li key={index}>{item}</li>);
    return (
        <ul className="list">
            {/*<form></form>*/}
            {items}
        </ul>
    );
}

List.defaultProps = {
    items: []
};
