export type Answer = {
  id: string;
  text: string;
  next: string | null;
  value?: boolean
};

export interface AnswerData {
  questionId: string;
  answer: string | boolean;
  description: string;
}