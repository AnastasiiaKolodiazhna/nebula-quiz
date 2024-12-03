export interface QuestionPageProps {
    text: string;
    statement?: string;
    answers: { id: string; text: string; next: number | null }[];
    handleAnswerClick: (nextId: number | null, answer: string | number) => void;
  }
  
  export interface InfoPageProps {
    header: string;
    text: string;
    buttonText: string;
    next: number | null;
    handleAnswerClick: (nextId: number | null, answer: string | number) => void;
  }
  
  export type Answer = {
    id: string;
    text: string;
    next: number | null;
  };
  
  export type InfoPageButton = {
    text: string;
    next: number;
  };
  
  export type Question = {
    id: string;
    question: string;
    answers: Answer[];
    describtion: string;
    type?: string;
    header?: string;
    button?: InfoPageButton;
    statement?: string;
    questionTemplate?: any
    conditions?: any
  };


export interface AnswerData {
  questionId: string;
  answer: string | number;
  describtion: string;
}


export type Condition = { if: Record<string, string>; question?: string, next?: string };
export type QuestionTemplate = {
  default: string;
  conditions?: Condition[];
};
  