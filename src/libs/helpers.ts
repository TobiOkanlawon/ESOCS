interface O {
  [key: string]: any;
};

const renameProperty = (oldName: string, newName: string, object: O) => {
  object[newName] = object[oldName];
  delete object[oldName];
  return object;
};

const renamePropertyOfObjectsInArray = (
  oldName: string,
  newName: string,
  objectArray: O[]
) => {
  const newArray: O[] = [];
  for (let o of objectArray) {
    newArray.push(renameProperty(oldName, newName, o));
  }

  return newArray;
};

export { renameProperty, renamePropertyOfObjectsInArray };
