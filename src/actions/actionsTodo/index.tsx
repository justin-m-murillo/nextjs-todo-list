import { TodosState } from '../../types/Todo'
import { serverActivateTodo, serverCreateTodo, serverCompleteTodo, serverDeleteTodo } from '@/actions/serverActionsTodo'
import { redirect } from 'next/navigation'

export const actionCreateTodo = (data: FormData, todosState: TodosState) => {
  const { todos, setTodos } = todosState
  // create new todo item
  serverCreateTodo(data)
    .then(created => {
      setTodos([...todos, created])
    })
    .then( redirect('/') )
    .catch(error => console.warn('Error in create todo', error))
}

export const actionDeleteTodo = (
  id: string,
  todosState: TodosState) => 
{
  const { todos, setTodos } = todosState
  // set deleted Todo 'deleted' field to true
  serverDeleteTodo(id)
    .then(deleted => {
      const newTodos = [...todos]
      const index = newTodos.findIndex(todo => todo.id === deleted.id)
      newTodos[index].deleted = true
      setTodos(newTodos)
})}

export const actionCompleteTodo = (
  id: string, 
  title: string, 
  todosState: TodosState) => 
{
  const { todos, setTodos } = todosState
  // set completed Todo 'completed' field to true
  serverCompleteTodo(id, title)
    .then(completed => {
      // update context
      const newTodos = [...todos]
      const index = newTodos.findIndex(todo => todo.id === completed.id)
      newTodos[index].completed = true
      setTodos(newTodos)
})}

export const actionActivateTodo = (
  id: string, 
  todosState: TodosState
) => {
  const { todos, setTodos } = todosState
  // set inactive Todo back to active
  serverActivateTodo(id)
    .then(activated => {
      // update context
      const newTodos = [...todos]
      const index = newTodos.findIndex(todo => todo.id === activated.id)
      newTodos[index].completed = false
      newTodos[index].deleted = false
      setTodos(newTodos)
})}