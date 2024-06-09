// src/models/QuestionCollection.ts
export interface QuestionCollection {
  id: string;
  sessionId: string;
  questionsIds: string[];
  title: string;
  description: string;
}
