import React from 'react'

/**
 * Banner component, like a carousel for the mainpage.
 * 
 * @param {*} props Component properties
 */
export default function Banner(props) {
    const [current, setCurrent] = React.useState(0)
    return (
        <section className='hero is-halfheight is-black is-bold'>
            <div className='hero-content'>
                {props.slides ?
                    <>
                        <button className='button is-small' onClick={() => setCurrent(normalizeNext(current - 1))}>prev</button>
                        <button className='button is-small' onClick={() => setCurrent(normalizeNext(current + 1))}>next</button>
                        {props.slides.length > 1 ?
                            <>
                                <button className='button is-small is-pulled-left' onClick={() => setCurrent(normalizeNext(current - 1, props.slides.length))}>prev</button>
                                <button className='button is-small is-pulled-right' onClick={() => setCurrent(normalizeNext(current + 1, props.slides.length))}>next</button>
                            </>
                            : null}
                    </>
                    : null}

            </div>
        </section>
    )
}

function normalizeNext(next, size, shouldLoop = true) {
    if (size <= 0) {
        return 0
    }
    if (next < size) {
        if (next < 0 && shouldLoop) {
            return (size + next) % size
        }
        return next
    } else {
        if (shouldLoop) {
            return next % size
        } else {
            return size - 1
        }
    }
}