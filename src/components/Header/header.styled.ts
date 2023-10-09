import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: showHeader 1s ease;
  
  height: 110px;
  width: 100%;
  
  background-color: var(--color-background-transparency);
  backdrop-filter: blur(7px);
  
  position: fixed;
  padding: 0 5%;
  left: 0;
  top: 0;
  
  z-index: 1000;

  @keyframes showHeader {
    from { transform: translateY(-100%); }
    to { transform: translateY(0%); }
  }
`
export const LinksContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  
  gap: 25px;
  font-weight: 400;

  @media only screen and (max-width: 850px) {
    display: none;
  }
`;

export const Link = styled.li`
  transition: all 0.4s ease;
  
  &.selected {
    color: var(--color-primary);
    font-weight: 600!important;
    
    //pointer-events: none;
  }
  
  &:not(.selected):hover {
    color: var(--color-secondary);
    letter-spacing: 1px;
  }
  
  .list_Number {
    font-weight: 600;
  }
`


export const LogoStyle = styled.div`
`