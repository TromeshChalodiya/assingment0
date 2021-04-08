//Please install live server in your app

const countPoints = (amount) => {
  const givenAmount = Number(amount);
  if (givenAmount) {
    let spentAbove100 = 0;
    let spentAbove50 = 0;
    const multiplierAbove100 = 2;
    const multiplierAbove50 = 1;

    spentAbove100 = amount > 100 ? amount - 100 : spentAbove100;
    spentAbove50 =
      givenAmount - spentAbove100 > 50
        ? givenAmount - spentAbove100 - 50
        : spentAbove50;
    return (
      spentAbove100 * multiplierAbove100 + spentAbove50 * multiplierAbove50
    );
  } else {
    return 'Given amount is not a valid number';
  }
};

[123, 423, 41, 51, 3232, 2322, 1233, -122]
  .map((amount) => countPoints(amount))
  .reduce((acc, current) => acc + current, 0);

/* 
this gives sum of all points in your given dataset. You can pass array of amounts you like and it will return sum of points
*/
