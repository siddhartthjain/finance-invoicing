import * as path from 'path';
/**
 * Check if value is empty
 *
 * @param value
 */
export function isEmpty(value: any): boolean {
  if (Array.isArray(value) && value.length < 1) return true;
  if (isObject(value) && Object.keys(value).length < 1) return true;
  if (!value) return true;

  return false;
}

/**
 * Check if value is of type object.
 *
 * @param value
 */
export function isObject(value: any): boolean {
  if (typeof value === 'object' && value !== null) {
    return true;
  }
  return false;
}

/**
 * Get Project Base Path.
 */
export function basePath() {
  return path.join(__dirname, '../../../../');
}

/**
 * Check if value is not empty
 *
 * @param value
 */
export function isNotEmpty(value: any): boolean {
  return !isEmpty(value);
}
