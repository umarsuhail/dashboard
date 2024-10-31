// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type User = {
    id?:string; 
    name: string;
    username: string;
    email: string;
}
export type LoginFormInputs={
    email:string,
    password:string
}
export interface UserState {
    users: User[];
    loading: boolean;
    error: string | null;
    deletedUsers?: User[]
  }