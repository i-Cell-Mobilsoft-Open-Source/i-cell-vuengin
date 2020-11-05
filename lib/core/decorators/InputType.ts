import { decorateProperty } from './LayoutDataModel';
export function InputType(subtype: string): PropertyDecorator {
  return decorateProperty('subtype', subtype);
}
