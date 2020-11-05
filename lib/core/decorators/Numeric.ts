import { InputType } from './InputType';
export function Numeric(): PropertyDecorator {
  return InputType('number');
}
