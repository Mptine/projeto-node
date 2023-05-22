/*We defined a shared folder, that will be at reach of both client side and server side. 
Since we'll be using the types below a lot well define then here */

export type Notepad = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  created_at: string;
};

export type Comment = {
  id: number;
  notepad_id: number;
  created_at: string;
  message: string;
};
