import { decorateProperty } from './LayoutDataModel';
export function Order(order: number): PropertyDecorator {
  return decorateProperty('order', order);
}
