export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'

export const addItem = (name) => {
  return {type: ADD_ITEM, name}
}

export const removeItem = (index) => {
  return {type: REMOVE_ITEM, index}
}