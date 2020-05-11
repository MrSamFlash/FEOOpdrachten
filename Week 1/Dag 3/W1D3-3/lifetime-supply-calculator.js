const calculateSupply = (age, amountDay) => {
    let maxAge = 100;
    let totalNeeded = (amountDay * 365) * (maxAge - age);
    console.log("You will need " + totalNeeded + " to last you until the ripe old age of " + maxAge + ".");
    return totalNeeded;
}
calculateSupply(95, 2);
calculateSupply(28, 2);
calculateSupply(2, 2);