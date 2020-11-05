import { decorateProperty } from './LayoutDataModel';
export function Classes(classes = 'column'): PropertyDecorator {
  return decorateProperty('classes', classes);
}
