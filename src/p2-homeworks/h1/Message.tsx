import React from 'react'
import style from './Message.module.css'

type PropsType = {
    avatar: string,
    name: string,
    message: string,
    time:string,
}

function Message(props: PropsType) {
    return (
        <div className={style.message}>
            <div>
                <img src={props.avatar} className={style.avatar}/>
            </div>
            <div className={style.content}>
                <div className={style.name}>
                    {props.name}
                </div>
                <div className={style.messageTime}>
                    <div className={style.messageItem}>
                        {props.message}
                    </div>
                    <div className={style.time}>
                        {props.time}
                    </div>
                </div>
            </div>
            <div className={style.arrow}></div>
        </div>
    )
}

export default Message
