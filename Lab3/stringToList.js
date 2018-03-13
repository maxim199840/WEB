function parseLine() {
  let arrForPairs = [];
  let line = lineToParse.value;
  if (line.length % 2) {
    line += '_'
  }
  for (let i = 0; i < line.length / 2; i++) {
    arrForPairs[i] = line[i * 2] + line[i * 2 + 1];
  }
  console.log(arrForPairs);
  let lineToAdd = '';
  arrForPairs.map(item => {
    lineToAdd += `<li>${item}</li>`;
  })
  ulContainer.innerHTML = lineToAdd;
}