"use strict";

// Function Declaration

function calcAge(dob) {
  const yearNow = 2026;
  const currentAge = yearNow - dob;
  const message = `Gideon is ${currentAge} years old now!`;

  return message;
}
const result = calcAge("2002");
console.log(result);

// Function Expression

const gideonsRetirementAge = function calcAge2(birthYear) {
  // Calculating birthyear
  const currentYear = 2030;
  const gideonsBirthYear = currentYear - birthYear;

  // calculating retirement year
  const retirementAge = 60;
  const gideonsWorkingYrs = retirementAge - gideonsBirthYear;

  const message = `Gideon is currently ${gideonsBirthYear} years old and he have ${gideonsWorkingYrs} years to retire`;

  return message;
};

const result2 = gideonsRetirementAge(2002);
console.log(result2);

// Arrow Function

const ageRestriction = (birthYears) => {
  const yearNow = 2026;
  const age = yearNow - birthYears;
  let usersAge = age;
  let bellowAge = 18;
  let waitPeriod = bellowAge - usersAge;

  let message;

  if (usersAge > 18) {
    message = `You are currently ${age} years old, you can use this application`;
  } else if ((usersAge = 17)) {
    message = `You are currently ${age} years old, wait ${waitPeriod} more year to be able to use this application`;
  } else if (usersAge < 17) {
    message = `You are currently ${age} years old, wait ${waitPeriod} more years to be able to use this application`;
  }
  return message;
};
const result3 = ageRestriction(2002);
console.log(result3);
