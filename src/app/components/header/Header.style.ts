import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  position: relative;
  z-index: 1;
`;

export const Button = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  justify-self: start;
  border: none;
  cursor: pointer;
  margin-left: 9rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
  }

  @media (max-width: 360px) {
    margin-left: 0;
  }
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const VectorImage = styled.img`
  width: 1rem;
  height: 1.2rem;
  position: absolute;
  left: 50%;
`;
