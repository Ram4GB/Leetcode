// You are given connections between people as an array of strings, where each string is in the form "A:B" meaning person A is friends with person B.
const connectBetweenPeople = (connections, from, to) => {
  const peopleSet = new Map();
  for (let i = 0; i < connections.length; i++) {
    const [personA, personB] = connections[i].split(":");
    if (!peopleSet.has(personA)) {
      peopleSet.set(personA, [personB]);
    } else {
      peopleSet.get(personA).push(personB);
    }
    if (!peopleSet.has(personB)) {
      peopleSet.set(personB, [personA]);
    } else {
      peopleSet.get(personB).push(personA);
    }
  }
  const res = [];
  const visited = new Set([from]);
  backtracking(peopleSet, from, to, [from], visited, res);

  if (!res.length) return -1;
  
  return res;
};

const backtracking = (peopleSet, from, to, arr, visited, res) => {
  if (from === to) {
    return res.push(Array.from(arr));
  }

  const neighbors = peopleSet.get(from);
  for (let i = 0; i < neighbors.length; i++) {
    if (!visited.has(neighbors[i])) {
      arr.push(neighbors[i]);
      visited.add(neighbors[i]);
      backtracking(peopleSet, neighbors[i], to, arr, visited, res);
      arr.pop();
      visited.delete(neighbors[i]);
    }
  }
};

console.log(connectBetweenPeople(["fred:joe", "joe:mary", "mary:fred", "mary:bill"], "fred", "bill"));
// console.log(connectBetweenPeople(["fred:joe", "joe:mary", "mary:fred", "mary:bill", "john:tom"], "fred", "tom"));
