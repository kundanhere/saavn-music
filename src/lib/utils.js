import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple CSS class names using the `clsx` and `twMerge` utilities.
 *
 * @param {any[]} inputs - An array of CSS class names or conditional expressions that evaluate to CSS class names.
 * @returns {string} - The combined CSS class names.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Sorts an array of data objects by their `year` property in ascending or descending order.
 *
 * @param {any[]} data - An array of data objects to sort.
 * @param {'asc' | 'desc'} [order='asc'] - The sort order, either 'asc' for ascending or 'desc' for descending.
 * @returns {any[]} - The sorted array of data objects.
 */
export function sortByDate(data = [], order = 'asc') {
  return order === 'asc' ? data.sort((a, b) => a.year - b.year) : data.sort((a, b) => b.year - a.year);
}

/**
 * Sorts an array of data objects by their `name` property in ascending or descending order.
 *
 * @param {any[]} data - An array of data objects to sort.
 * @param {'asc' | 'desc'} [order='asc'] - The sort order, either 'asc' for ascending or 'desc' for descending.
 * @returns {any[]} - The sorted array of data objects.
 */
export function sortByName(data = [], order = 'asc') {
  if (data.length === 0) return data;
  return order === 'asc'
    ? data.sort((a, b) => a.name.localeCompare(b.name))
    : data.sort((a, b) => b.name.localeCompare(a.name));
}

/**
 * Formats an array of people objects into a comma-separated string of their names.
 *
 * @param {Object[]} people - An array of people objects, each with a `name` property.
 * @returns {string} A comma-separated string of the names of the people in the input array.
 */
export function formatString(people = []) {
  if (people === undefined || people.length === 0) return '';
  return people
    .map((person) => person.name)
    .join(', ')
    .replace(/(&quot;)|(&amp;)/g, '');
}

/**
 * Capitalizes the first letter of the given string.
 *
 * @param {string} string - The input string to capitalize.
 * @returns {string} The input string with the first letter capitalized.
 */
export function capitalizeFirstLetter(string) {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Converts a number of seconds to a string representation in the format "minutes:seconds".
 *
 * @param {number} seconds - The number of seconds to convert.
 * @returns {string} The string representation of the time in the format "minutes:seconds".
 */
export function convertSecondsToMinutes(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

/**
 * A function to generate initials from a full name.
 *
 * @param {string} name - The full name from which to generate initials.
 * @returns {string} The initials of the name. If the name is empty or null, returns an empty string.
 */
export function getAlphabet(name) {
  if (!name) return '';
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return initials;
}

/**
 * Waits for the specified duration in milliseconds and resolves a Promise.
 *
 * @param {number} duration - The duration in milliseconds to wait.
 * @returns {Promise<void>} A Promise that resolves after the specified duration.
 */
export function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

/**
 * Replaces HTML entities with their corresponding characters in the given HTML string.
 *
 * @param {string} htmlString - The HTML string to strip HTML entities from.
 * @returns {string} The input HTML string with HTML entities replaced by their corresponding characters.
 */
export function stripHtml(htmlString) {
  return !htmlString ? htmlString : htmlString.replace(/(&quot;)|(&amp;)/g, '');
}
