import React from 'react'
import NavLink from './NavLink'

function Nav() {

    return (
        <div className="Nav" style={{'backgroundColor': 'white'}}>
            <h1>BUY IT NOW!</h1>
            <NavLink content="Browse" />
            <NavLink content="Clear Cart" />
            
            
        </div>
    )
}

export default Nav

