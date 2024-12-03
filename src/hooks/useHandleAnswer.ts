import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { saveAnswer } from "@/redux/slices/quizSlice";
import { Question } from "@/types/types";

export const useHandleAnswer = (question: Question) => {
  const { id, type, describtion } = question;

  const dispatch = useDispatch();
  const router = useRouter();

  const handleAnswerClick = (
    nextId: string | null,
    answer: string | number
  ) => {
    if (type !== "info") {
      dispatch(
        saveAnswer({
          questionId: id,
          describtion,
          answer,
        })
      );
    }
    if (nextId) {
      router.push(`/question/${nextId}`);
    } else {
      router.push("/summary");
    }
  };

  return { handleAnswerClick };
};
