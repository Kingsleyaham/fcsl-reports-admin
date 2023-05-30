export interface IUser {
  id: number;
  name: string;
  username: string;
  imageUrl: string | null;
  isDeleted: boolean;
  deleteAt: Date | null;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
