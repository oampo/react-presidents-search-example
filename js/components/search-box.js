import React from 'react';

export default function SearchBox(props) {
    return <input type="text" onChange={
        (event) => props.onChange(event.currentTarget.value)
    } />;
}
