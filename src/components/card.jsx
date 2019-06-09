import React from "react";

//@ts-check
export default function Card(props) {
    return (
        <div className='card'>
            <header className='card-header'>
                <p className='card-header-title'>{props.title}</p>
                <span className='card-header-icon'>
                    <span className='icon'>

                    </span>
                </span>
            </header>
            <div className='card-image'>
                <figure className='image is-4by3'>
                    <img src='' alt={props.title} />
                </figure>
            </div>
            <div className='card-content'>
                {props.children}
            </div>
            <footer className='card-footer'>
                <span className='card-footer-item'></span>
            </footer>
        </div>
    )
}