export function arrToObjectData(arrHeader, arrBody) {
  const data = arrHeader.reduce((prevValue, curValue, curIndex, arr) => {
    return { ...prevValue, [curValue]: arrBody[curIndex] };
  }, {});
  return data;
}
