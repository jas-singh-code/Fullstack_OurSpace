import React from 'react';

export default ({ currentUser, logout}) => {
    const display = currentUser ? (
         <div>
             <p>Hello {currentUser.firstName}</p>
             <button onClick={logout}>Log out</button>
         </div>
    ) : (
        <div>
            <Link className="btn" to="/login">Sign Up</Link>
            <Link className="btn" to="/login">Log In</Link>
        </div>

    );

    return (
        <header className="nav-bar">
            <h1 className="logo"> Our Space</h1>
            <div>
                {display}
            </div>
        </header>    
    )
    
}

export default Nav;

