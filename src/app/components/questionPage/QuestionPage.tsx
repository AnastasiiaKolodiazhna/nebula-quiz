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
import { getTextFromTemplate } from "@/utils/getTextFromTemplate";
import { Answer } from "@/types/answer";

const QuestionPage = ({ question }: { question: Question }) => {
  const {
    question: questionText,
    statement,
    answers,
    questionTemplate,
  } = question;

  const { handleAnswerClick } = useHandleAnswer(question);

  return (
    <Container>
      <QuestionContainer>
        <Title>
          {questionTemplate
            ? getTextFromTemplate(questionTemplate)
            : questionText}
        </Title>
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
            <AnswerItem>No answers available</AnswerItem>
          )}
        </AnswerList>
      </QuestionContainer>
    </Container>
  );
};

export default QuestionPage;
