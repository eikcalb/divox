import * as React from "react";
import logo from '../logo.svg';
import Message, { context, isIMessage } from "./message";
import { SERVER } from "../App";

export function useNotify() {
    let { add } = React.useContext(context)
    if (!add) throw new Error('Notivication provider has not been set!')

    return (message, title, callback) => {
        try {
            if (!isIMessage(message)) {
                message = new Message(message, title)
            }
            message.onshow = () => {
                message.seen = true
                if (callback) callback()
            }
            return dispatchNotification(message, add)
        } catch (err) {
            if (callback) callback(err)
            else throw err
        }
        return false
    }
}

/**
 * Utility function to dispatch notifications to the be handled by the store reducer.
 * It returns a function that accepts a notification message and a callback to trigger when notification is shown.
 * 
 * @param dispatch 
 */
// function notify(message: string | IMessage, title?: string, callback?: (err?: Error) => any) {
//     // if (!container) throw new Error('Container has not been set. Cannot dispatch notification!')
//     try {
//         if (isIMessage(message)) {
//             (message as Message).onshow = () => {
//                 if (callback) callback()
//             }
//             dispatchNotification(message as Message)
//         } else {
//             let newMessage = new Message(message as string, title)
//             newMessage.onshow = () => {
//                 if (callback) callback()
//             }
//             dispatchNotification(newMessage)
//         }
//     } catch (err) {
//         if (callback) callback(err)
//         else throw err
//     }
// }


/**
 * The notification mechanism is to set the notification state to display the message within the application  or create a native notification
 * 
 * @param message The notification to dispatch
 */
function dispatchNotification(message, useInternal) {
    //  if @see Mesage.useNative is false and the document is focused, show the notification in-app,
    //  else use the native notification mechanism
    // if (!message.useNative && document.hasFocus()) {
    if (!message.useNative) {
        useInternal(message)
    } else {
        let notification;
        if (message.title) {
            notification = new Notification(message.title, {
                requireInteraction: false,
                icon: logo,
                tag: SERVER.config.appName,
                ...message.options,
                body: message.message
            })
        } else {
            notification = new Notification(message.message, {
                requireInteraction: false,
                icon: logo,
                tag: SERVER.config.appName,
                ...message.options,
            })
        }
        notification.onshow = () => { if (message.onshow) message.onshow() }
    }
    return message
}