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
