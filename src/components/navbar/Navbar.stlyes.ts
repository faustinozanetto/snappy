import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  left: 0;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 100;

  padding-bottom: 1rem;
  padding-top: 1rem;

  backdrop-filter: blur(8px);
  background-color: rgba(17, 25, 40, 0.75);
  border-bottom: 1px solid rgba(255, 255, 255, 0.125);
`;

export const NavbarContent = styled.div`
  display: flex;
  flex-wrap: inherit;
  justify-content: space-between;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  max-width: 960px;
`;
