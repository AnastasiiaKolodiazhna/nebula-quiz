import { useGetAnswer } from "@/hooks/useGetAnswers";
import { ResultWrapper, Question, Answer } from "./SummaryPage.style";
import { booleanToString } from "@/utils/convertBooleanToString";

export const Summary = () => {
  const { answers } = useGetAnswer();

  return (
    <ResultWrapper>
      <div>
        {answers.map((answer) => (
          <div key={answer.questionId}>
            <Question>{answer.description}</Question>
            <Answer>
              {typeof answer.answer === "boolean"
                ? booleanToString(answer.answer)
                : answer.answer}
            </Answer>
          </div>
        ))}
      </div>
    </ResultWrapper>
  );
};
