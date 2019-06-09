import React from 'react'

export default function Modal(props) {
    return (
        <div className={`modal ${props.active}`}>
            <div className='modal-background'></div>
            <div className='modal-content'>{props.children}</div>
            <button className='modal-close is-large' aria-label='close'></button>
        </div>
    )
}

export function ModalCard(props) {
    return (
        <div className={`modal ${props.active}`}>
            <div className='modal-background'></div>
            <div className='modal-card'>
                <header className='modal-card-head'>
                    <p className='modal-card-title'>{props.title}</p>
                    <button className='modal-close' aria-label='close'></button>
                </header>
                <div className='modal-card-body'>
                    {props.children}
                </div>
                <footer className='modal-card-foot'>
                    <button className='button is-link'>Done</button>
                </footer>
            </div>
            <button className='modal-close is-large' aria-label='close'></button>
        </div>
    )
}