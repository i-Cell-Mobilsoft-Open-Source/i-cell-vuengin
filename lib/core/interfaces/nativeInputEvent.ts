import { HasValue, HasChecked } from '../interfaces';
export interface NativeInputEvent {
  target: HasValue & HasChecked;
}
