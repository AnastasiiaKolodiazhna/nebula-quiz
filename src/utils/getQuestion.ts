import config from "@/data/steps.json";
import { Question } from "@/types/question";

export const getQuestion = (id: string) => {
  const question = config.questions.find(
    (q) => q.id.toString() === id
  ) as Question;

  return question;
};

export const getDefaultQuestion = () => {
  const question = config.questions.find(
    (question) => question.defaultQuestion
  ) as Question;

  return question;
};
