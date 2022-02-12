import React, { useState } from "react";
import { ChatsForm } from "./ChatInputStyles";
import firebase from "firebase/compat/app";
import { db } from "../../firebase";
import { selectRoomId } from "../../features/roomSlice";
import { selectUser } from "../../features/appSlice";
import { useSelector } from "react-redux";

const ChatInput = () => {
  const user = useSelector(selectUser);
  const roomId = useSelector(selectRoomId);
  const [input, setInput] = useState("");

  const send = (e) => {
    e.preventDefault();

    if (!input) {
      return alert("Digite uma mensagem! :)");
    } else if (!roomId) {
      alert("Escolha um canal para enviar mensagens!! :)");
    } else if (roomId) {
      db.collection("rooms").doc(roomId.roomId).collection("messages").add({
        message: input,
        username: user.username,
        profilePic: user.profilePic,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setInput("");
  };

  return (
    <ChatsForm>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Write a menssage"
      />
      <button onClick={send} style={{ display: "none" }}>
        Send
      </button>
    </ChatsForm>
  );
};

export default ChatInput;
