import React from 'react'
import Message from './Message'

const Header = props => {
    return (
        <header className={`Header ${props.isCleaned ? 'Header--is-empty': ''} ${props.items.length > 0 ? 'Header--is-active': ''} ${props.items.length > 1 ? 'Header--is-active-auto': ''}`}>
            { props.items.length === 0 ?
                (<Message>No items have been selected.</Message>) : ''
            }
            <ul className="Badges">
                {props.items.map(item => {
                    let obj = JSON.parse(item);
                    return (
                    <li onClick={()=>props.onChangeItem(item)} key={`badge-${obj.name}`} className="Badges__item">
                        <i className={`List__item--${obj.color}`}></i> {obj.name} 
                    </li>
                    )
                })}
                { props.items.length > 1 ?
                    (<li onClick={()=>props.clearCheckedItems()} className='Badges__item List__link'>CLEAR</li>) : ''
                }
            </ul>
        </header>
    )
}

export default Header