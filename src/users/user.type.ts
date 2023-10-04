export interface IUSER {
  id: string;
  commentsCount: number;
  sessionsCount: number;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  phoneNumber: string;
  isMentor: boolean;
  company: string;
  bio: string;
  expertise: [string];
}
