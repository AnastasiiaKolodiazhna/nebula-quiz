import { AnswerData } from "@/types/answer";
import { Condition } from "@/types/question";

export const findMatchingCondition = (
  conditions: Condition[] | undefined,
  answers: AnswerData[]
) => {
  if (!conditions) return null;

  const matchingCondition = conditions.find(({ if: condition }) =>
    Object.entries(condition).every(([key, value]) =>
      answers.some(
        ({ questionId, answer }) => questionId === key && answer === value
      )
    )
  );

  return matchingCondition || null;
};
