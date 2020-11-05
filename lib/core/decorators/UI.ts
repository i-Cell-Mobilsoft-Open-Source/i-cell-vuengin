import { decorateProperty } from './LayoutDataModel';
export function UI(ui = ''): PropertyDecorator {
  return decorateProperty('ui', ui);
}
