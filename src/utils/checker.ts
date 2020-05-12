import { isArray } from 'util';

/**
 * 해당 배열이 유효한 값인지 확인함
 * @param value
 * @return 유효하면 true 유효하지 않으면 false 반환
 */
export function isValidArray(value: any[] | undefined): boolean {
  if (isArray(value) && value.length > 0) return true;
  return false;
}
