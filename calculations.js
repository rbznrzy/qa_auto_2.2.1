function increaseBalance(balance, income) {
  increasingbalanceResult = balance + income;
  return increasingbalanceResult;
}

function decreaseBalance(balance, spends) {
  decreasingbalanceResult = balance - spends;
return decreasingbalanceResult;
}

function divideBalanceByAccounts(balance, accoutnCounts, strangeParameter) {
  dividingBalanceResult = balance / accoutnCounts;
  console.log(`${strangeParameter}`);
  return dividingBalanceResult;
}

function getRestAfterDivision(balance, restAfterNumber) {
  restAfterDivisionResult = balance % restAfterNumber;
  return restAfterDivisionResult;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2, 4000));
console.log(getRestAfterDivision(7000, 3));
