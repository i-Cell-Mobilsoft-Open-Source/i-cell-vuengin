export const templateCode = `<v-icell-autocomplete
  :value="state.value"
  :options="state.data"
  :placeholder="'Names'"
  @input="onInput"
  @selected="onSelected"
></v-icell-autocomplete>
...
const state = reactive({
   data: [
     'Abigail',
  ...
  ...
  ...
     'Zoey',
   ],       
   selected: '',
   value: '',
 });

 const onInput = (value: any) => {
   state.value = value;
 };

 const onSelected = (value: any) => {
   state.selected = value;
 };
`;
