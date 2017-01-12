import React from 'react';

import SearchBox from './search-box';
import List from './list';

export default class LiveSearch extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        };
        this.setQuery = this.setQuery.bind(this);
    }

    setQuery(query) {
        this.setState({
            query
        });
    }

    render() {
        const items = this.props.items.filter(item =>
            item.toLowerCase().includes(this.state.query.toLowerCase())
        );
        return (
            <div className="live-search">
                <SearchBox onChange={this.setQuery} />
                <List items={items} />
            </div>
        );
    }
}

