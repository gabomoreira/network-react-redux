import React from "react";
import {
  MessageContainer,
  MessageInfoContainer,
  MessageInfo,
} from "./MessageStyles";
import SimpleDateTime from "react-simple-timestamp-to-date";

const Message = ({ message, username, profilePic, timestamp }) => {
  return (
    <MessageContainer>
      <img src={profilePic} alt={username} />
      <MessageInfoContainer>
        <MessageInfo>
          <h4>{username}</h4>
          <span>
            <SimpleDateTime
              timeSeparator=":"
              format="MYD"
              showTime="1"
              showDate="0"
              meridians="1"
            >
              {timestamp}
            </SimpleDateTime>
          </span>
        </MessageInfo>

        <p>{message}</p>
      </MessageInfoContainer>
    </MessageContainer>
  );
};

export default Message;
