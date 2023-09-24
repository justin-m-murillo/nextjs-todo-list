export type Todo = {
  id:          string,
  userId:      string,
  title:       string,
  description: string | null,
  location:    string | null,
  dueDate:     Date | null,
  bgGradient:  string,
  completedAt: Date | null,
  deletedAt:   Date | null,
  createdAt:   Date,
  updatedAt:   Date,
}

export type TodosState = {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

export interface TodoListProps {
  todos: Todo[],
  todosContext: TodosState,
}

export interface TodoButtonProps {
  id: string,
  todosContext: TodosState,
}

export type TodoDateTime = {
  year: number,
  month: number,
  day: number,
  hours: number,
  minutes: number,
  ampm: string,
}
