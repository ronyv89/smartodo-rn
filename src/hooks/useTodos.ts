import {useState, useEffect} from 'react';
import {TodoItemType} from '../types';
import {sortTodos} from '../utils/helpers';

/**
 * Custom hook for managing todo items
 * @returns {Object} Todo state and methods
 */
export const useTodos = () => {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Simulate loading todos from storage
  useEffect(() => {
    const loadTodos = async () => {
      // In a real app, this would load from AsyncStorage or an API
      setTimeout(() => {
        setTodos([
          {
            id: '1',
            title: 'Complete SmarTODO app',
            description: 'Implement all features according to Windsurf rules',
            completed: false,
            createdAt: new Date(),
          },
          {
            id: '2',
            title: 'Learn UI Kitten',
            description: 'Study the documentation and examples',
            completed: false,
            createdAt: new Date(Date.now() - 86400000), // 1 day ago
          },
        ]);
        setLoading(false);
      }, 1000);
    };

    loadTodos();
  }, []);

  /**
   * Add a new todo item
   * @param {string} title Todo title
   * @param {string} description Todo description
   */
  const addTodo = (title: string, description?: string) => {
    const newTodo: TodoItemType = {
      id: Math.random().toString(36).substring(2),
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };

    setTodos((prevTodos) => sortTodos([...prevTodos, newTodo]));
  };

  /**
   * Toggle completion status of a todo
   * @param {string} id Todo ID
   */
  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      sortTodos(
        prevTodos.map((todo) =>
          todo.id === id
            ? {...todo, completed: !todo.completed, updatedAt: new Date()}
            : todo
        )
      )
    );
  };

  /**
   * Remove a todo item
   * @param {string} id Todo ID
   */
  const removeTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    loading,
    addTodo,
    toggleTodo,
    removeTodo,
  };
};
