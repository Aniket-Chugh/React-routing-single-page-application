import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavigateCode() {
    const navigate = useNavigate(); // Call useNavigate to get the navigate function

    const ClickHandler = () => {
        navigate("/"); // Use navigate to redirect to /contact
    };

    return (
        <div>
            <button onClick={ClickHandler}>Navigate through button</button>
        </div>
    );
}

export default NavigateCode;
