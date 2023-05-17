export interface IUser {
  id: number;
  name: string;
  username: string;
  imageUrl: string | null;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
