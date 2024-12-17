import React from "react";
import Header from "../../components/Header";

const BlockLayout = ({ title, children }) => {
    return (
        <div>
            <Header>{title}</Header>
            {children}
        </div>
    );
};
export default BlockLayout;
