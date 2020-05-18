import React from 'react'

const Message = props => (
    <span className={`Message ${props.className}`}>{props.children}</span>
)

export default Message