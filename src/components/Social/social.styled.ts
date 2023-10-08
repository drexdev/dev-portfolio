import styled from "styled-components";

export const SocialStyle = styled.div`
  position: fixed;
  bottom: 0;
  left: 4%;
  transition: all 0.5s ease;
  
  animation: slidein 1s ease;

  @keyframes slidein {
    from { transform: translateY(100%); }
    to { transform: translateY(0%); }
  }

  @media only screen and (max-width: 1400px) {
    display: none;
  }
`

export const UlSocialStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  
  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 10px auto 0;
    background: white;
    opacity: 0.5; 
  }
`;

export const IconSocial = styled.li`

`

export const Icon = styled.i`
  font-size: 1.7rem;
  opacity: 0.7;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-6px);
    color: var(--color-primary);
    opacity: 1!important;
  }
`