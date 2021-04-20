import React from 'react'
import {NavLink} from 'react-router-dom'
import s from '../h5/Header.module.css'

function Header() {
    return (
        <div>
            <div className={s.item}>
                <NavLink to='/pre-junior'>pre-junior </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/junior'>junior </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/junior-plus'>junior plus</NavLink>
            </div>

        </div>

    )
}

export default Header
