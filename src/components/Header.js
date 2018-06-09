import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component {
render()
{

    return (
        <header>
            <div className='navBar'>
                <div className="halfNav">
                    <NavLink className='home' exact activeclassname='.activeTab' to="/">Home</NavLink>
                    <NavLink className='quiz' exact activeclassname='.activeTab' to="/quiz">Quiz</NavLink>
                </div>
                <div className="halfNav">
                    <NavLink className='login' exact activeclassname='.activeTab' to="/login">LOG-IN</NavLink>
                    <NavLink className='stats' exact activeclassname='.activeTab' to="/stats">STATISTICS</NavLink>
                </div>
            </div>
            <div className="colorNav">

            </div>
        </header>
    )
}
}

export default Header;