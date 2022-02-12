import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  height: 100%;
  width: 20vw;
  background: var(--primary-color);
  z-index: 999;
  transition: left 1s ease;

  @media (max-width: 1024px) {
    width: 25vw;
  }

  @media (max-width: 768px) {
    display: ${({ activeMenu }) => (activeMenu ? "block" : "none")};
    position: absolute;
    top: 60px;
    width: 35%;
    height: calc(100vh - 60px);
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const SidebarUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 1px 12px #fb8500;
  padding: 15px;

  > .MuiAvatar-root {
    cursor: pointer;
  }
`;

export const SidebarUser = styled.div`
  display: flex;
  flex-direction: column;
  > h4 {
    color: #fff;
    text-align: left;
  }

  > span {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #fff;
    margin-left: 5px;
    margin-top: 5px;

    > .MuiSvgIcon-root {
      font-size: 1rem;
      color: green;
      margin-right: 3px;
      cursor: pointer;
    }
  }
`;
export const SidebarOptionsContainer = styled.div``;

export const SidebarChannelsContainer = styled.div`
  overflow: scroll;
  height: 370px;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;
