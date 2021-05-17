const fetchData = (err) => {
  return new Promise((resolve, reject) => {
    if (err) return reject('error');

    return setTimeout(() => resolve('peanut butter'), 3000);
  });
};

export default fetchData;
