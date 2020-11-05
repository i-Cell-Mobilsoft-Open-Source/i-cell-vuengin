import { multiDecorateProperty } from './LayoutDataModel';
export function Row(rowName: string, rowOrder: number): PropertyDecorator {
  return multiDecorateProperty(['rowName', 'rowOrder'], [rowName, rowOrder]);
}
