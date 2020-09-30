let key = 0;
const flags = [];
function create(flagsvalue) {
  const flag = {id: key++,...flagsvalue}
  flags.push(flag)
  return flag;

}

function readAll() {
  return flags;
}

module.exports = { create, readAll };
