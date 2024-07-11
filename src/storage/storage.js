export const getAllItemsFromLocalStorage = () => {
  const items = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const item = JSON.parse(localStorage.getItem(key));
    items.push(item);
  }
  return items;
};


export const setItemToLocalStorage = (item) => {
  const check = localStorage.getItem(item.id)
  if (check) {
    const existingItem = JSON.parse(check);
    existingItem.count++
    localStorage.setItem(check.id, JSON.stringify(existingItem))
    
  } else {
    const newItem = {...item, count: 1}
    localStorage.setItem(newItem.id, JSON.stringify(item))
  }
  localStorage.setItem(item.id, JSON.stringify(item));
};

export const deleteItemFromLocalStorage = id => {
  localStorage.removeItem(id)
}