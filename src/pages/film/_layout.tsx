import React from 'react'
import { NavLink, Redirect, useLocation } from 'umi'
import Comingsoon from './Comingsoon'
import Nowplaying from './Nowplaying'


export default function _layout(props: any) {
    if (props.location.pathname === "/film") {
        return <Redirect to='/film/nowplaying' />
    }
    return (
        <div>
            <div style={{"height":"200px","backgroundColor":"yellow"}}>大轮播</div>
            <NavLink to="/film/nowplaying">nowplaying</NavLink>
            <NavLink to="/film/comingsoon">comingsoon</NavLink>
            {props.children}
        </div>
    )
}
