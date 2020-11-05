import { decorateProperty } from './LayoutDataModel';
export function Disabled(disabled = true): PropertyDecorator {
  return decorateProperty('disabled', disabled);
}
