'use client'
import React from 'react'
import TodoItem from '@/components/TodoItem'
import { TodoListProps } from '@/types/Todo'
import ButtonRow from '../TodoItem/ButtonRow'
import ButtonDeleteForever from '../ButtonDeleteForver'

import { motion, AnimatePresence } from 'framer-motion'
import Delay from '../Delay'
import { MotionListItemProps } from '@/motion/props'


const TodoListCompleted = ({ todos: completedTodos, todosContext }: TodoListProps) => {
  return (
    <AnimatePresence>
      {completedTodos.map((todo, index) => (
        <Delay key={todo.id} delay={index * 200}>
          <motion.div className='my-4' {...MotionListItemProps}>
            <TodoItem todo={todo}>
              <ButtonRow>
                <ButtonDeleteForever id={todo.id} todosContext={todosContext} />
              </ButtonRow>
            </TodoItem>
          </motion.div>
        </Delay>
      ))}
    </AnimatePresence>
  )
}

export default TodoListCompleted