import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 7%;
  background: var(--primary-color);

  .MuiSvgIcon-root {
    color: #fff;
  }

  > .MuiAvatar-root {
    cursor: pointer;
  }
`;
export const HeaderLogo = styled.div`
  > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;

    > h2 {
      font-size: 1.3rem;
    }

    .MuiSvgIcon-root {
      margin-right: 5px;
    }
  }
`;
