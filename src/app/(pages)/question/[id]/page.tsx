import InfoPage from "@/app/components/infoPage/InfoPage";
import QuestionPage from "@/app/components/questionPage/QuestionPage";
import { Question } from "@/types/question";
import { getQuestion } from "@/utils/getQuestion";

interface QuestionPageParams {
  id: string;
}

export default async function Question({
  params,
}: {
  params: Promise<QuestionPageParams>;
}) {
  const { id } = await params;

  const question = getQuestion(id);

  if (question?.type === "question")
    return <QuestionPage question={question} />;
  if (question?.type === "info") return <InfoPage question={question} />;

  return <div>Question not found</div>;
}
