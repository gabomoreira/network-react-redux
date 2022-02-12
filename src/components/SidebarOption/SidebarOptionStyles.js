import styled from "styled-components";

export const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px;
  cursor: pointer !important;
  color: #fff;
  transition: all 0.3s ease-in-out;

  :hover {
    background: #fb8500;
  }

  > span {
    margin-left: 5px;
    font-weight: bold;
    font-size: 1rem;
  }
`;
