import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-color);
  height: 100vh;
`;
export const LoginFlex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  border-radius: 8px;
  background: #fff;
  width: 300px;

  @media (max-width: 320px) {
    width: 90vw;
  }

  > .MuiSvgIcon-root {
    font-size: 10rem;
    margin-bottom: 20px;
    color: var(--primary-color);
  }

  > button {
    border: none;
    outline: none;
    padding: 10px 20px;
    color: #fff;
    background: #fca311;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    transition: opacity 0.3s ease-in-out;

    :hover {
      opacity: 0.8;
    }
  }
`;
