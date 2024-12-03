import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const useGetAnswer = () => {
  const answers = useSelector((state: RootState) => state.quiz.answers);

  return { answers };
};
