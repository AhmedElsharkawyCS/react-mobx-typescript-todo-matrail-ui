export interface IProps {
  children: React.ReactNode;
  display?: "flex";
  justifyContent?: string;
  alignItems?: string;
}

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}
