function increaseBalance(balance, income) {
  balance += income;
  return balance;
}

function decreaseBalance(balance, spends) {
  balance -= spends;
  return balance;
}

function divideBalanceByAccounts(balance, accoutnCounts, strangeParameter) {
  balance /= accoutnCounts;
  console.log(`${strangeParameter}`);
  return balance;
}

function getRestAfterDivision(balance, restAfterNumber) {
  balance %= restAfterNumber;
  return balance;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2, 4000));
console.log(getRestAfterDivision(7000, 3));


/** Операция инкремента с префиксной нотацией */
let incrementedNumberPrefix = function incrementExample(number) {
  let x = ++number
  return x;
}

console.log(incrementedNumberPrefix(16));

/** Операция инкремента с постфиксной нотацией */
let incrementedNumberPostfix = function incrementExample(number) {
  number++
  return number;
}

console.log(incrementedNumberPostfix(16));

/** Операция декремента с префиксной нотацией */
let decrementedNumberPrefix = function decrementExample(number) {
  let x = --number
  return x;
}

console.log(decrementedNumberPrefix(16));

/** Операция декремента с постфиксной нотацией */
let decrementedNumberPostfix = function decrementExample(number) {
  number--
  return number;
}

console.log(decrementedNumberPostfix(16));

