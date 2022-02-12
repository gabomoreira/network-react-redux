import styled from "styled-components";

export const ChatsContainer = styled.div`
  margin-left: 20vw;
  width: 100%;
  height: 100%;
  background: #f8edeb;

  overflow-y: scroll;

  @media (max-width: 1024px) {
    margin-left: 25vw;
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const ChatsHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px;
  background: whitesmoke;
  margin-top: 60px;
`;

export const ChatsHeight = styled.div`
  height: 120px;
  background: transparent;
`;
