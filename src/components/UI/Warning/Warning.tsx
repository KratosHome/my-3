import React, {FC} from 'react';
import "./Warning.scss";

interface WarningProps {
    children: React.ReactNode
    color: "ok" | "error" | "warning"
}

const Warning: FC<WarningProps> = ({children, color}) => {
    return (
        <span className={`container-event-text ${color}-event-text`}>
            {children}
        </span>
    );
};

export default Warning;