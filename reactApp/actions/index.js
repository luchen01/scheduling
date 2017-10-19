export function addApp(id, name, phone){
  return {
    type: 'ADD_APP',
    id,
    name,
    phone
  };
};
