import { InputType } from './InputType';
export function Password(): PropertyDecorator {
  return InputType('password');
}
