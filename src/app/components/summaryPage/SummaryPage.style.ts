import { styled } from "styled-components";

export const ResultWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  align-items: baseline;
  gap: 20px;
  padding: 20px;
`;

export const Question = styled.h2`
  font-size: 18px;
  margin: 10px;
`;

export const Answer = styled.p`
  padding: 10px;
  border-radius: 10px;
  background: #eaeef7;
  font-weight: 100;
  line-height: 25px;
  font-size: 14px;
`;
