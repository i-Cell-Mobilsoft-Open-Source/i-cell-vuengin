export const data = [
  { id: 1, first_name: 'Jesse', last_name: 'Simmons', date: '2016-10-15', gender: 'Male' },
  { id: 2, first_name: 'John', last_name: 'Jacobs', date: '2016-12-15', gender: 'Male' },
  { id: 3, first_name: 'Tina', last_name: 'Gilbert', date: '2016-04-26', gender: 'Female' },
  { id: 4, first_name: 'Clarence', last_name: 'Flores', date: '2016-04-10', gender: 'Male' },
  { id: 5, first_name: 'Anne', last_name: 'Lee', date: '2016-12-06', gender: 'Female' }
];

export const columns = [
  {
    field: 'id',
    label: 'ID'
  },
  {
    field: 'first_name',
    label: 'First Name'
  },
  {
    field: 'last_name',
    label: 'Last Name'
  },
  {
    field: 'date',
    label: 'Date'
  },
  {
    field: 'gender',
    label: 'Gender'
  }
];

export const columnsSearchableConfig = [
  {
    field: 'id',
    label: 'ID',
    searchable: true
  },
  {
    field: 'first_name',
    label: 'First Name',
    searchable: false
  },
  {
    field: 'last_name',
    label: 'Last Name',
    searchable: false
  },
  {
    field: 'date',
    label: 'Date',
    searchable: false
  },
  {
    field: 'gender',
    label: 'Gender',
    searchable: false
  }
];
export const columnsEditConfig = [
  {
    field: 'id',
    label: 'ID',
    visible: true
  },
  {
    field: 'first_name',
    label: 'First Name',
    visible: true
  },
  {
    field: 'last_name',
    label: 'Last Name',
    visible: true
  },
  {
    field: 'date',
    label: 'Date',
    visible: true
  },
  {
    field: 'gender',
    label: 'Gender',
    visible: true
  }
];
