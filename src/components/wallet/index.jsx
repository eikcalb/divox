import React from 'react'

export const TOKEN_TYPE = { FREE: 'FREE', FROZEN: 'FROZEN' }

/**
 * Wallet Component displays the details of a wallet. This includes the available valye (free tokens), frozen tokens, wallet owner and other settings as specified.
 * @param {*} props 
 */
export function Wallet({ className, name, available, total }) {
    return (
        <div className={className}>
            <div className='columns'>
                <div className='column'>
                    <h2 className='title'>{available}</h2>
                    <span className='subtitle'>{total}</span>
                </div>
            </div>
            <div className='columns'>
                <p className='column'>{name}</p>
            </div>
        </div>
    )
}

/**
 * Token component for displlaying tokens in a wallet. There can be 2 types of tokens in Comfi, frozen and free.
 * Frozen tokens are single and indivisibe, while free tokens are consolidated into the available funds of a wallet.
 * 
 * @param {*} props 
 */
export function Token(props) {
    switch (props.type) {
        case TOKEN_TYPE.FREE:
            return <FreeToken {...props} />
        case TOKEN_TYPE.FROZEN:
            return <FrozenToken {...props} />
        default:
            throw new Error('Token type must either be free or frozen')
    }
}

const FreeToken = ({ type, value, indivisible, unit }) => {
    return (
        <div className='columns is-vcentered'>
            <div className='column is-centered'>
                <p>{value}</p>
            </div>
        </div>
    )
}

const FrozenToken = ({ type, value, indivisible, unit }) => {
    return (
        <div className='columns is-vcentered'>
            <div className='column is-centered'>
                <p>{value}</p>
            </div>
        </div>
    )
}