import React from 'react';

const BoxDisplay = (props) => {
    const {color} = props;
    return (
        <div>
            {
                color.map((item, index) => (
                    <div key={index} style={{ 
                        display: "inline-block",
                        margin: "10px",
                        height: "50px", 
                        width: "50px", 
                        backgroundColor: item
                        }}>
                    </div>
                    ))
            }
        </div>
    );
}

export default BoxDisplay;
