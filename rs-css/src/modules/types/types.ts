type Board = string[];

type Level = {
  name: string;
  answer: string;
  description: string;
  example: string;
  htmlViewer: string;
  completed: boolean;
  board: Board;
};

export { Level, Board };