// OBJ QUE REPRESENTA ALGUMA MUDANÇA QUE PRECISA ACONTECER NO STATE.
 export const ADD_ITEM = 'ADD_ITEM';


 const addItem = (item) => ({
  type: ADD_ITEM,
  item,
})

export default addItem;