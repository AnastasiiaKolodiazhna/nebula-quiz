import { RootState } from "@/redux/store";
import { AnswerData, QuestionTemplate } from "@/types/types";
import { useSelector } from "react-redux";
import { findMatchingCondition } from "./findMatchingCondition";

const replacePlaceholders = (text: string, answers: AnswerData[]) =>
  text.replace(/{(\w+)}/g, (_: any, key: any) => {
    const matchedAnswer = answers.find(({ questionId }) => questionId === key);
    return matchedAnswer ? matchedAnswer.answer : `{${key}}`;
  });


export const getTextFromTemplate = (questionTemplate: QuestionTemplate): string => {
  const answers = useSelector((state: RootState) => state.quiz.answers);
  const matchingText = findMatchingCondition(questionTemplate.conditions, answers);
  const baseText = matchingText?.question || questionTemplate.default;

  return replacePlaceholders(baseText, answers);
};