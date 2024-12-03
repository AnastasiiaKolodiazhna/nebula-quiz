export interface InfoPageProps {
  header: string;
  text: string;
  buttonText: string;
  next: number | null;
  handleAnswerClick: (nextId: number | null, answer: string | number) => void;
}

export type InfoPageButton = {
  text: string;
  next: number;
};
