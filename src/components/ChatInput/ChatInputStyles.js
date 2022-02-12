import styled from "styled-components";

export const ChatsForm = styled.form`
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 20px;
  width: 100%;

  > input {
    background: whitesmoke;
    border: none;
    outline: none;
    padding: 15px;
    width: 60%;
    border-radius: 8px;
    margin-right: 20%;

    @media (max-width: 768px) {
      width: 80%;
      margin-right: 0;
    }
  }
`;
