import { RootState } from "@/redux/store";
import { AnswerData } from "@/types/answer";
import { useSelector } from "react-redux";
import { findMatchingCondition } from "../utils/findMatchingCondition";
import { QuestionTemplate } from "@/types/question";

const replacePlaceholders = (text?: string, answers?: AnswerData[]) =>
  text?.replace(/{(\w+)}/g, (_: string, key: string) => {
    const matchedAnswer = answers?.find(({ questionId }) => questionId === key);
    return matchedAnswer ? matchedAnswer.answer : `{${key}}`;
  });

export const useGetTextFromTemplate = (questionTemplate?: QuestionTemplate) => {
  const answers = useSelector((state: RootState) => state.quiz.answers);
  const matchingText = findMatchingCondition(
    questionTemplate?.conditions,
    answers
  );
  const baseText = matchingText?.question || questionTemplate?.default;

  const replacedPlaceholders = replacePlaceholders(baseText, answers);

  return { replacedPlaceholders };
};
