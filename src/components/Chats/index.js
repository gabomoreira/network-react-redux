import React, { useEffect, useState, useRef } from "react";
import { ChatsContainer, ChatsHeader, ChatsHeight } from "./ChatsStyles";
import Message from "../Message";
import ChatInput from "../ChatInput";
import { db } from "../../firebase";
import { selectRoomId } from "../../features/roomSlice";
import { useSelector } from "react-redux";

const Chats = () => {
  const roomId = useSelector(selectRoomId);
  const [message, setMessage] = useState([]);
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId.roomId, message]);

  useEffect(() => {
    if (roomId.roomId) {
      db.collection("rooms")
        .doc(roomId.roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessage(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [roomId.roomId]);

  return (
    <ChatsContainer>
      <ChatsHeader>
        <h4># {roomId && roomId?.channelName}</h4>
      </ChatsHeader>
      <ChatsHeight style={{ height: "50px" }} />

      {message?.map((item, i) => (
        <Message
          key={i}
          profilePic={item.data.profilePic}
          username={item.data.username}
          message={item.data.message}
          timestamp={item?.data?.timestamp?.seconds}
        />
      ))}

      <ChatsHeight ref={chatRef} />
      <ChatInput chatRef={chatRef} />
    </ChatsContainer>
  );
};

export default Chats;
