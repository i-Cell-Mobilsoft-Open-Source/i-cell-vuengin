import { decorateProperty } from './LayoutDataModel';
export function Required(required = true): PropertyDecorator {
  return decorateProperty('required', required);
}
