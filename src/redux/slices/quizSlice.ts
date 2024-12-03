import { AnswerData } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuizState {
  answers: AnswerData[];
}

const initialState: QuizState = {
  answers: [],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    saveAnswer(state, action: PayloadAction<AnswerData>) {
      const index = state.answers.findIndex(
        (answer) => answer.questionId === action.payload.questionId
      );
      if (index !== -1) {
        state.answers[index] = action.payload;
      } else {
        state.answers.push(action.payload);
      }
    },
    clearAnswers(state) {
      state.answers = [];
    },
  },
});

export const { saveAnswer, clearAnswers } = quizSlice.actions;
export default quizSlice.reducer;
