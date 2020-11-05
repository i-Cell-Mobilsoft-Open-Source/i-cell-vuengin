import { InputType } from './InputType';
export function Text(): PropertyDecorator {
  return InputType('text');
}
