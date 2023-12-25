import React from 'react';

const Top = (props) => {
    return (
        <div>
            <Link to='/players/list'>Manage Players</Link>
            <span>|</span>
            <Link>Manage Player Status</Link>
        </div>
    );
}

export default Top;
