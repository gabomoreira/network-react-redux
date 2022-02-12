import React from "react";
import { SidebarOptionContainer } from "./SidebarOptionStyles";
import { db } from "../../firebase";
import { useDispatch } from "react-redux";
import { enterRoomId } from "../../features/roomSlice";

const SidebarOption = ({ Icon, title, enterChannel, id, noneClick }) => {
  const dispatch = useDispatch();

  const enterChannelName = () => {
    const roomName = prompt("Digite o nome do canal");

    if (roomName) {
      const capitalized = roomName[0].toUpperCase() + roomName.substr(1);
      db.collection("rooms").add({
        channelName: capitalized,
      });
    } else {
      return;
    }
  };

  const enterChannelId = () => {
    if (id) {
      dispatch(
        enterRoomId({
          roomId: id,
          channelName: title,
        })
      );
    }
  };

  return (
    <SidebarOptionContainer
      onClick={
        noneClick ? null : enterChannel ? enterChannelId : enterChannelName
      }
    >
      {Icon ? Icon : "#"} <span>{title}</span>
    </SidebarOptionContainer>
  );
};

export default SidebarOption;
