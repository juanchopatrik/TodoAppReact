import React from 'react';
import { AppUI } from './AppUI';
<<<<<<< HEAD
import { useLocalStorage } from './useLocalStorage';

// localStorage.removeItem('TODOS_V1');

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
  { text: 'Usar estados derivados', completed: true },
];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  // const completedTodos = todos.filter(
  //   todo => !!todo.completed
  // ).length;t

  // const completedTodos = todos && todos.filter(
  //   todo => !!todo.completed
  // ).length;

  const completedTodos = todos && todos.filter(
    todo => !!todo.completed
  )?.length || 0;

  const totalTodos = todos && todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
=======
// import { useLocalStorage } from './useLocalStorage';
import { TodoProvider } from '../TodoContext';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>);
>>>>>>> finishin-formulario
}

export default App;