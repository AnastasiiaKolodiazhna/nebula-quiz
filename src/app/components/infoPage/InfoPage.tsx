"use client";

import { Question } from "@/types/question";
import {
  Button,
  Container,
  InfoContainer,
  Statement,
  Title,
} from "./InfoPage.style";
import { useHandleAnswer } from "@/hooks/useHandleAnswer";
import { findMatchingCondition } from "@/utils/findMatchingCondition";
import { useGetAnswer } from "@/hooks/useGetAnswers";

const InfoPage = ({ question }: { question: Question }) => {
  const { header, question: questionText, button, conditions } = question;
  const { handleAnswerClick } = useHandleAnswer(question);
  const { answers } = useGetAnswer();

  return (
    <Container>
      <InfoContainer>
        <Title>{header}</Title>
        <Statement>{questionText}</Statement>
        <Button
          onClick={() =>
            handleAnswerClick(
              findMatchingCondition(conditions, answers)?.next || null,
              button?.text || ""
            )
          }
        >
          {button?.text}
        </Button>
      </InfoContainer>
    </Container>
  );
};

export default InfoPage;
