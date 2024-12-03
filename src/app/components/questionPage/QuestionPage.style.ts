import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0.5rem;
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const QuestionContainer = styled.div`
  width: 100%;
  max-width: 20.5rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 700;
  line-height: 2rem;

  word-wrap: break-word;
`;

export const Statement = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 2rem;

  word-wrap: break-word;
`;

export const AnswerList = styled.ul`
  list-style: none;
  padding: 0;

  margin: 0;
  overflow-y: auto;
  flex-grow: 1;
  width: 100%;
`;

export const AnswerItem = styled.button`
  width: 100%;
  max-width: 20rem;
  padding: 1.4rem 1.5rem;
  gap: 1.5625rem;
  border-radius: 1rem;
  background-color: #eaeef7;
  border: 0.0625rem solid #e0e0e0;
  margin-bottom: 0.5rem;
  cursor: pointer;
  box-shadow: 2px 2px 6px 0px #543c9740;
  color: black;

  text-align: centr;
  word-wrap: break-word;
  white-space: normal;

  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background: linear-gradient(
      165.54deg,
      #141333 -33.39%,
      #202261 15.89%,
      #543c97 55.84%,
      #6939a2 74.96%
    );
    color: #fbfbff;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 1.4rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  text-decoration: none;
  background-color: #eaeef7;
  border: 0.0625rem solid #e0e0e0;
  color: black
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:active {
    background: linear-gradient(
      165.54deg,
      #141333 -33.39%,
      #202261 15.89%,
      #543c97 55.84%,
      #6939a2 74.96%
    );
    color: #fbfbff;
  }
`;
