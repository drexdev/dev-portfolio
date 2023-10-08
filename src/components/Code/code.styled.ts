import styled from "styled-components";

export const CodeContainer = styled.div`
  background-color: #1F1D2FFF;
  width: 40%;
  height: 500px;
  border-radius: 10px;
  border: 1px solid #13121FFF;

  position: relative;
  overflow: hidden;
  
  @media only screen and (max-width: 1300px) {
    width: 45%;
  }

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  height: 50px;
`

export const TabStyle = styled.div`
  background-color: #191725;
  height: 100%;
  padding: 0 25px;

  border-bottom: 1px solid var(--color-primary);

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 7px;

  & span {
    opacity: 0.8;
  }
`

export const CodeStyle = styled.div`
  width: 100%;
  height: 100%;
  background-color: #191725;
  letter-spacing: -0.5px;
  font-family: 'Fira Code', monospace;
  overflow: auto;
  
  display: flex;
  justify-content: left;
  font-size: var(--font-size-default);
`

export const NumberListRow = styled.div`
  width: 7%;
  height: 100%;
  background-color: transparent;
  
  border-right: 1px solid #1F1D2FFF;
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: column;
  padding: 10px 0;
  
  opacity: 0.7;
  
  p {
    margin: 2.5px 0;
    
  }
`;

export const CodeEditor = styled.div`
  width: 92%;
  padding: 10px 0;
  
  .vars {
    color: #FF2C64;
    font-weight: 600;
  }
  
  .string {
    color: #F8CC66;
  }
  
  .number {
    color: red;
  }
  
  .lineCode {
    border-bottom: 1px solid #1F1D2FFF;
    margin: 2px 0;
  }
`