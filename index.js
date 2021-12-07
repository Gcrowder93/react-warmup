// INPUT: the array of countries from data.js
// OUTPUT: an array of the names
// REQS: use .map

export const getCountryNames = (countries) => {
  return countries.map((country) => country.name);
  //   return countries.map((names) => names.name);
  //first try, did a redo
};

// INPUT: the array of countries from data.js
// OUTPUT: an array of the names and their iso2 country codes using .map
// REQS: use .map

export const getCountryCodes = (countries) => {
  return countries.map((country) => [country.name, country.iso2]);
};

// INPUT: the array of countries from data.js
// OUTPUT: only countries in Oceania
// REQS: use .filter

export const filterOceania = (countries) => {
  return countries.filter((country) => country.continent === 'Oceania');
};

// INPUT: the array of countries from data.js
// OUTPUT: only countries that include the letters 'au'
// REQS: use .filter

export const filterAu = (countries) => {
  return countries.filter((country) => country.name.toLowerCase().includes('au'));
};

// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {
  return brands.reduce((acc = [], shoe) => {
    const shoeLine = shoe.shoes;
    shoeLine.forEach((element) => {
      acc.push(element);
    });
    console.log(acc);
    return acc;
  }, []);
};
