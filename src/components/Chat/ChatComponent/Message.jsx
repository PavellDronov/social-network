import React from "react";

const Message = ({ content, id, me }) => {
    const classNames = me ? 'messages__item messages__item--me' : 'messages__item';
    return (
        <div className={classNames} id={id}>
            <p>{content}</p>
        </div>
    );
};

export default Message;
