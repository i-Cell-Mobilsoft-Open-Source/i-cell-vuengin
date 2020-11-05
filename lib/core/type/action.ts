import { HasData, NativeInputEvent } from '../interfaces';
export type Action = ($ev: NativeInputEvent, $me: HasData) => void;
