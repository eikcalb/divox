import React from "react";

//@ts-check
export default function Card({ imgSrc, title, children, hideTitle, actions }) {
    return (
        <div className='card'>
            {title && !hideTitle ?
                <header className='card-header'>
                    <p className='card-header-title'>{title}</p>
                    <span className='card-header-icon'>
                        <span className='icon'>

                        </span>
                    </span>
                </header>
                : null}
            {imgSrc ?
                <div className='card-image'>
                    <figure className='image is-4by3'>
                        <img src={imgSrc} alt={title} />
                    </figure>
                </div>
                : null}
            <div className='card-content'>
                {children}
            </div>
            {actions ?
                actions.map((action) =>
                    <footer className='card-footer'>
                        <span className='card-footer-item'>{action}</span>
                    </footer>
                )
                : null}
        </div>
    )
}