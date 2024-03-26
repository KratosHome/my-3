import React, {FC} from 'react';
import "./OrLine.scss";

interface OrLineProps {
    children: React.ReactNode
}

const OrLine: FC<OrLineProps> = ({children}) => {
    return (
        <>
            <div className="container-or"><span>{children}</span></div>
        </>
    );
};

export default OrLine;