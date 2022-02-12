import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  border-radius: 8px;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  background: #fff;
  max-width: 450px;

  > img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
`;
export const MessageInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 10px;
  > p {
    width: 340px;
    word-wrap: break-word;

    @media (max-width: 425px) {
      width: 290px;
    }

    @media (max-width: 375px) {
      width: 250px;
    }

    @media (max-width: 320px) {
      width: 200px;
    }
    @media (max-width: 280px) {
      width: 160px;
    }
  }
`;
export const MessageInfo = styled.div`
  display: flex;

  > span {
    margin-left: 5px;
    font-size: 1rem;
    color: #adb5bd;
  }
`;
