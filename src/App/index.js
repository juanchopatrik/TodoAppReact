
import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoHeader } from '../TodoHeader';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { useTodos } from './useTodos';
import { useLocalStorage } from './useLocalStorage';

function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    setOpenModal,
    openModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos()

  return (
    <>
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
    </>
  );
}

export default App;