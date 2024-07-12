export const getAllItemsFromLocalStorage = () => {
  const items = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const item = JSON.parse(localStorage.getItem(key));
    items.push(item);
  }
  return items;
};

export const setItemToLocalStorage = (item, quantity) => {
  const check = localStorage.getItem(item.id);
  if (check) {
    const existingItem = JSON.parse(check);
    existingItem.count += quantity; 
    localStorage.setItem(item.id, JSON.stringify(existingItem));
  } else {
    const newItem = { ...item, count: quantity }; 
    localStorage.setItem(item.id, JSON.stringify(newItem));
  }
};


export const deleteItemFromLocalStorage = (id) => {
  localStorage.removeItem(id);
};

export const updateItemInLocalStorage = (id, updateData) => {
  const itemString = localStorage.getItem(id);

  if (itemString) {
    const item = JSON.parse(itemString);
    const updatedItem = { ...item, ...updateData };
    localStorage.setItem(id, JSON.stringify(updatedItem));
    return updatedItem;
  } else {
    console.error(`Item with id ${id} not found in localStorage`);
    return null;
  }
};
