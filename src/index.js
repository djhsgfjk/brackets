module.exports = 
function check(str, bracketsConfig) {
  const brackets = bracketsConfig.reduce((a, [o, c]) => {a[c] = o; return a}, {});
  const openBrackets = bracketsConfig.map(([o, c]) => o);
  const lastOpenBrackets = [];
  for (let i = 0; i < str.length; i++) {
    if (lastOpenBrackets.length !== 0 && lastOpenBrackets.slice(-1)[0] === brackets[str[i]]) {
      lastOpenBrackets.pop();
    } else if (openBrackets.includes(str[i])) {
      lastOpenBrackets.push(str[i]);
    } else {
      return false;
    }
  }
  return lastOpenBrackets.length === 0;
}