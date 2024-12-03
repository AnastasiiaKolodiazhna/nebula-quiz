import { Answer } from "./answer";
import { InfoPageButton } from "./info";

export interface QuestionPageProps {
  text: string;
  statement?: string;
  answers: { id: string; text: string; next: number | null }[];
  handleAnswerClick: (nextId: number | null, answer: string | number) => void;
}

export type Question = {
  id: string;
  question: string;
  answers: Answer[];
  description: string;
  type?: string;
  header?: string;
  button?: InfoPageButton;
  statement?: string;
  questionTemplate?: QuestionTemplate;
  conditions?: Condition[];
};

export type Condition = {
  if: Record<string, string>;
  question?: string;
  next?: string;
};

export type QuestionTemplate = {
  default: string;
  conditions?: Condition[];
};
