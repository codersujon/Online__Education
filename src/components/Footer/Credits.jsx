import React from 'react';

function Credits(props) {
    return (
        <div className="footer__credit">
            <p>created by <span>{props.web}</span> | all right reserved.</p>
        </div>
    );
}

export default Credits;