import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 1.5rem 1.5rem 1.5rem;
  background-color: transparent;
  background: linear-gradient(
    165.54deg,
    #141333 -33.39%,
    #202261 15.89%,
    #543c97 55.84%,
    #6939a2 74.96%
  );
  min-height: 100vh;
  bottom: 56px;
  box-sizing: border-box;
  z-index: 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5em;
  max-width: 25em;
`;

export const Title = styled.h1`
  font-size: clamp(1.4rem, 4.5vw, 1.8rem);
  margin-bottom: 1.5rem;
  font-weight: 800;
  line-height: 1.6;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  word-wrap: break-word;
`;

export const Statement = styled.p`
  font-size: clamp(1rem, 3.5vw, 1.1rem);
  margin-bottom: 3rem;
  color: #ffffff;
  font-weight: 300;
  line-height: 1.6rem;
  text-align: center;
  word-wrap: break-word;
  opacity: 0.85;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 18rem;
  padding: 0.9rem 1.5rem;
  border-radius: 1rem;
  background-color: #f3f4fc;
  border: 0.0625rem solid #d6d6d6;
  margin-bottom: 0.75rem;
  cursor: pointer;
  box-shadow: 3px 3px 8px 0px #6549a240;
  color: #7b4bb8;
  font-size: clamp(1.1rem, 3.5vw, 1.25rem);
  font-weight: 500;
  line-height: 1.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.25s, box-shadow 0.25s;

  &:active, 
  &:hover {
    background: linear-gradient(
      160deg,
      #1e1b4b -20%,
      #2b2c63 30%,
      #6549a2 70%,
      #7c4db8 100%
    );
    color: #ffffff;
  }
`;
