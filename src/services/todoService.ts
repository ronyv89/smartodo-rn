import {TodoItemType} from '../types';

/**
 * Todo service for handling API requests
 * This is a mock implementation that would be replaced with actual API calls
 */
class TodoService {
  /**
   * Fetch all todos
   * @returns {Promise<TodoItemType[]>} Promise resolving to array of todos
   */
  async fetchTodos(): Promise<TodoItemType[]> {
    // Simulate API delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
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
      }, 1000);
    });
  }

  /**
   * Create a new todo
   * @param {Partial<TodoItemType>} todo Todo data
   * @returns {Promise<TodoItemType>} Promise resolving to created todo
   */
  async createTodo(todo: Partial<TodoItemType>): Promise<TodoItemType> {
    // Simulate API delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const newTodo: TodoItemType = {
          id: Math.random().toString(36).substring(2),
          title: todo.title || 'Untitled',
          description: todo.description,
          completed: todo.completed || false,
          createdAt: new Date(),
        };
        resolve(newTodo);
      }, 500);
    });
  }

  /**
   * Update an existing todo
   * @param {string} id Todo ID
   * @param {Partial<TodoItemType>} updates Updates to apply
   * @returns {Promise<TodoItemType>} Promise resolving to updated todo
   */
  async updateTodo(
    id: string,
    updates: Partial<TodoItemType>,
  ): Promise<TodoItemType> {
    // Simulate API delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // In a real app, this would validate the ID exists
        const updatedTodo: TodoItemType = {
          id,
          title: updates.title || 'Untitled',
          description: updates.description,
          completed: updates.completed !== undefined ? updates.completed : false,
          createdAt: new Date(Date.now() - 86400000), // Simulate existing creation date
          updatedAt: new Date(),
        };
        resolve(updatedTodo);
      }, 500);
    });
  }

  /**
   * Delete a todo
   * @param {string} id Todo ID
   * @returns {Promise<boolean>} Promise resolving to success status
   */
  async deleteTodo(id: string): Promise<boolean> {
    // Simulate API delay
    return new Promise((resolve) => {
      setTimeout(() => {
        // In a real app, this would validate the ID exists
        resolve(true);
      }, 500);
    });
  }
}

export const todoService = new TodoService();
