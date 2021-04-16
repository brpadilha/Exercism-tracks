//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {

  const timeSeconds = date.getTime() / 1000

  const newDateWithGigasecond = timeSeconds + Math.pow(10, 9)

  return new Date(newDateWithGigasecond * 1000);
};
