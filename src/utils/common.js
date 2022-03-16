export const getItemBasedOnId = (itemList, idToSelect) => itemList?.find((item) => item.id === parseInt(idToSelect));
