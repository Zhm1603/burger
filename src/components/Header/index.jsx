import React from "react";
import './style.css';

const Header = ({ children  }) =>{
    return(
        <div className="part-header">{children }</div>
    )
};

export default Header;