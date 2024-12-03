import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Question } from "@/types/types";

export const useGetAnswer = () => {
  const answers = useSelector((state: RootState) => state.quiz.answers);

  return { answers };
};
