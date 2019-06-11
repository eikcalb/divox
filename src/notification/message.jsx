import * as React from 'react'

const LOW = 'LOW'
const MEDIUM = 'MEDIUM'
const HIGH = 'HIGH'

export const Priority = {
    LOW, MEDIUM, HIGH
}

export function isIMessage(message) {
    return typeof message === 'object' && 'message' in message && 'priority' in message
}

export default class Message {
    id = (performance ? performance.now() : Math.random() * 10) + '' + Date.now()
    message
    priority = Priority.LOW;
    title
    options = {
        timeout: 5000
    }
    seen = false
    useNative = false
    onshow

    setTitle(title) {
        this.title = title
        return this
    }

    constructor(message, title) {
        this.message = message;
        if (title) this.title = title
    }

    toString() {
        return (this.title ? `${this.title.bold()}: ` : '') + this.message
    }
}


export function Element(props) {
    if (typeof props.message.options.timeout === 'number') {
        let timeoutID = setTimeout(props.onClose, Math.max(0, props.message.options.timeout))
        React.useEffect(() => () => {
            clearTimeout(timeoutID)
        })

    }

    if (props.message.onshow) props.message.onshow()

    return (
        <div style={{ position: 'absolute', top: 0 }} className="notification is-info notification-element">
            <button onClick={props.onClose} className="delete"></button>
            {props.message.message}
        </div>
    )
}


export const context = React.createContext({})
/**
 * Root container used for displaying notifications. This component contains the entire body of the application and serves as a target for positioning notifications.
 * @param {*} props 
 * 
 * @todo Support multiple notifications to be shown. Current impementation only didplays one notification at a time
 */
export function EventManager(props) {
    let [events, updateEvents] = React.useState(null)
    let remove = (eventId) => {
        updateEvents(null)
    }
    let addEvent = (event) => {
        updateEvents(event)
    }

    return (
        <context.Provider value={{ add: addEvent }}>
            {props.children}
            {/* {Object.values(events).map(event => (
                <Element message={event} key={event.id} onClose={() => remove(event.id)} />
            ))} */}
            {events ?
                <Element message={events} onClose={() => remove()} />
                : null}
        </context.Provider>
    )
}

