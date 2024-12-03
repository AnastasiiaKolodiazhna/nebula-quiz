import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { saveAnswer } from "@/redux/slices/quizSlice";
import { Question } from "@/types/question";

export const useHandleAnswer = (question: Question) => {
  const { id, type, description } = question;

  const dispatch = useDispatch();
  const router = useRouter();

  const handleAnswerClick = (
    nextId: string | null,
    answer: string | boolean
  ) => {
    if (type !== "info") {
      dispatch(
        saveAnswer({
          questionId: id,
          description,
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
