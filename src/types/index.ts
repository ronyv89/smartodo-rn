/**
 * Type definitions for the SmarTODO application
 */

/**
 * Todo item type definition
 */
export type TodoItemType = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt?: Date;
};

/**
 * User profile type definition
 */
export type UserProfileType = {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
};

/**
 * Application theme type definition
 */
export type ThemeType = 'light' | 'dark';
