function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const colorNumber =
    "rgb(" +
    `${getRandomInt(0, 1000)}` +
    "," +
    `${getRandomInt(0, 1000)}` +
    "," +
    `${getRandomInt(0, 1000)}` +
    ")";

    export default colorNumber;