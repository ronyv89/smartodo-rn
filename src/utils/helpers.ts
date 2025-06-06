/**
 * Helper utility functions for the SmarTODO application
 */

/**
 * Generate a unique ID for new items
 * @returns {string} Unique ID string
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

/**
 * Format date to a readable string
 * @param {Date} date Date to format
 * @returns {string} Formatted date string
 */
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

/**
 * Sort todos by completion status and date
 * @param {Array} todos Array of todo items
 * @returns {Array} Sorted array of todo items
 */
export const sortTodos = (todos: any[]): any[] => {
  return [...todos].sort((a, b) => {
    // First sort by completion status
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    // Then sort by date (newest first)
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
};
