const parseData = data => {
  return Object.keys(data).map(key => {
    return {
      id: key,
      ...data[key],
    };
  });
};

export default parseData;
