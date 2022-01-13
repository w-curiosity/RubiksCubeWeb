const uuid = require('uuid').v4;

const id1 = uuid();
const id2 = uuid();

const records = {
  [id1]: {
    id: id1,
    name: 'Yijing',
    email: 'yijing.w@northeastern.edu',
    avg: '01:00.26',
    fastest: '00:53.17',
    type: '3x3x3 Cube',
  },
  [id2]: {
    id: id2,
    name: 'Yijing',
    email: 'yijing.w@northeastern.edu',
    avg: '04:10.11',
    fastest: '03:02.12',
    type: '4x4x4 Cube',
  },
};

function contains(id) {
  return !!records[id];
}

function getList() {
  return {...records};
}

function addRecords(name,email,avg,fastest,type) {
  const id = uuid();
  records[id] = {
    id,
    name,
    email,
    avg,
    fastest,
    type,
  };
  return records[id];
}

function getRecords(id) {
  return records[id];
}

module.exports = {
  getList,
  contains,
  addRecords,
  getRecords,
};
