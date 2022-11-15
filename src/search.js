let search = (arr, term) => {
  let k = arr.filter((data) => {
    return data.includes(term);
  });
  return k;
};

module.exports = search;
