/**
 * Module containing utility functions to interact with the browser's local storage.
 */

/**
 * Saves a value to local storage.
 * @param key The key under which the value will be stored.
 * @param value The value to be stored.
 */
function save(key: string, value: any): void {
  localStorage.setItem(key, value);
}

/**
 * Removes a value from local storage.
 * @param key The key of the value to be removed.
 */
function remove(key: string): void {
  localStorage.removeItem(key);
}

/**
 * Gets a value from local storage.
 * @param key The key of the value to retrieve.
 * @returns The value stored under the specified key.
 */
function get(key: string): any {
  return localStorage.getItem(key);
}

// Export the functions to make them available to other modules.
export default { save, remove, get };
