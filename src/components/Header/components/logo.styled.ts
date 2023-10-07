import { styled } from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: -1.5px;

  svg {
    width: auto;
    height: 60px;
  }
`;

export const LettersContainer = styled.div`
  display: flex;
  user-select: none;

  & > .letter {
    transition: transform 0.5s ease;
    cursor: pointer;
  }

  & > .letter:hover {
    transform: translateY(-7px);
    color: var(--color-primary)!important;
  }
`;