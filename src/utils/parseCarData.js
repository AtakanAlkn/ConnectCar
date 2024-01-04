const parseCarData = carList => {
  return Object.keys(carList).map(key => {
    return {
      id: key,
      ...carList[key],
    };
  });
};

export default parseCarData;
