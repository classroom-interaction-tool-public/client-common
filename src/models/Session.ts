// src/models/Session.ts
export interface Session {
  id: string;
  ownerId: string;
  questionsId: string[];
  participantsId: string[];
  questionCollectionIds: string[];
  courseId?: string;
  sessionName: string;
  sessionDescription: string;
  sessionCode: number;
  originalSessionCode: number;
  isActive: boolean;
}
