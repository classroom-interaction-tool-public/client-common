// src/models/Answer.ts
export interface Answer {
  id: string;
  ownerId: string;
  ownerUsername: string;
  questionId: string;
  type: string;
  text?: string;
  choice?: number;
}
