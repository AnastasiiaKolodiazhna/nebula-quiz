"use client";

import { Question } from "@/types/question";
import {
  Container,
  QuestionContainer,
  Title,
  AnswerList,
  Statement,
  AnswerItem,
} from "./QuestionPage.style";
import { useHandleAnswer } from "@/hooks/useHandleAnswer";
import { Answer } from "@/types/answer";
import { useGetTextFromTemplate } from "@/hooks/useGetTextFromTemplate";

const QuestionPage = ({ question }: { question: Question }) => {
  const {
    question: questionText,
    statement,
    answers,
    questionTemplate,
  } = question;

  const { handleAnswerClick } = useHandleAnswer(question);
  const { replacedPlaceholders } = useGetTextFromTemplate(questionTemplate);

  return (
    <Container>
      <QuestionContainer>
        <Title>{questionTemplate ? replacedPlaceholders : questionText}</Title>
        {statement && <Statement>{`"${statement}"`}</Statement>}
        <AnswerList>
          {answers.length > 0 ? (
            answers.map((answer: Answer) => (
              <AnswerItem
                key={answer.id}
                onClick={() =>
                  handleAnswerClick(
                    answer.next,
                    (Object.hasOwn(answer, "value") && answer.value) ||
                      answer.text
                  )
                }
              >
                {answer.text}
              </AnswerItem>
            ))
          ) : (
            <AnswerItem key="no-answers">No answers available</AnswerItem>
          )}
        </AnswerList>
      </QuestionContainer>
    </Container>
  );
};

export default QuestionPage;
