import React, { Component } from 'react'
import Message from './Message'
import Search from './Search'
import Checkbox from './Checkbox'
import Header from './Header'

export default class List extends Component {
    
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = { items: this.props.items, checkeds: [], search: '', isCleaned: false }
    }

    onChangeItem = e => {
        const array = [...this.state.checkeds];
        const param = (typeof e.target !== 'undefined' ? e.target.value : e)
        const index = array.indexOf(param)
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({checkeds: array});
        } else {
            this.setState({ checkeds: [...this.state.checkeds, e.target.value] })
        }
    }

    onChangeSearch = e => {
        const items = this.props.items.filter(x => x.name.indexOf(e.target.value) !== -1);

        this.setState({ items, search: e.target.value })
    }

    clearCheckedItems = e => {
        this.setState({ isCleaned: true, checkeds: [] })
        setTimeout(() => {
            this.setState({ isCleaned: false })
        }, 300);
    }

    sendData = (e) => {}

    onSubmit = (e) => { 
        this.sendData()
        e.preventDefault();
    }

    render() {
        return (
            <main>
                <Header items={this.state.checkeds} onChangeItem={this.onChangeItem} clearCheckedItems={this.clearCheckedItems} isCleaned={this.state.isCleaned} />

                <form onSubmit={this.onSubmit}>
                    <Search
                        name="search"
                        placeholder="Type to filter..."
                        value={this.state.search}
                        onChange={this.onChangeSearch} />
                </form>

                <div className="content">
                    { this.state.items.length === 0 ?
                        (<Message>No items have been found.</Message>) : ''
                    }
                    <ul className="List">
                        {this.state.items.map(item => {
                        
                        let itemStr = JSON.stringify(item)

                        return <li key={item.name} className={`List__item List__item--${item.color} ${this.state.checkeds.includes(itemStr) ? 'List__item--is-active': ''}`}>
                            <Checkbox
                                id={item.name}
                                value={itemStr}
                                defaultChecked={this.state.checkeds.includes(item.name)}
                                onChange={this.onChangeItem}
                            />
                            <label htmlFor={item.name}>
                                {item.name}
                            </label>
                        </li>
                        })}
                    </ul>
                </div>
            </main>
        )
    }
}