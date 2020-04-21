// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-randyperkins2k");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //using filter, find number of male customers in list.
    let arrOfMales = _.filter(array, function(customerObj) { 
    //filter male customers.
    //each customer has gender property.
    return customerObj.gender === 'male';
    }); 
    return arrOfMales.length;
};

var femaleCount = function(array) {
  return array.reduce((total, customer) => {
    if (customer.gender === 'female') {
      total++;
    } return total;
  }, 0);  
};

var oldestCustomer = function(array) {
    return _.reduce(array, function(oldest, customer) {
        if (customer.age > oldest.age) {
            oldest = customer;
        } return oldest;
    }).name;
};

var youngestCustomer = function(array) {
  return array.reduce((youngest, customer) => {
    if (customer.age < youngest.age) {
      youngest = customer;
    } return youngest;
  }).name; 
};

var averageBalance = function(array) {
  var replaced = [];
    array.forEach((person) =>  {
      replaced.push(Number(person.balance.replace(/[$,]/g, "")));
    });  
  return Number((replaced.reduce((total, balance) => total + balance)/replaced.length));
};

var firstLetterCount = function(array, letter) {
  return array.filter((customer) => {
    return customer.name[0].toLowerCase() === letter.toLowerCase();
  }).length;  
};

var friendFirstLetterCount = function(array, customer, letter) {
    var customerMatch = array.filter((customerObject) => {
      return customerObject.name === customer;
    });
    return customerMatch[0].friends.filter((jfriends) => {
      return jfriends.name[0].toLowerCase() === letter.toLowerCase();
    }).length;
};

var friendsCount = function(array, name) {
  return array.reduce((namesList, customer) => {
    customer.friends.forEach(function(friend) {
      if (friend.name === name) {
        namesList.push(customer.name);
      }
    });
  return namesList;
  }, []);
};

var topThreeTags = function(array){
    let tags = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].tags.length; j++) {
            tags.push(array[i].tags[j]);
        }
    }
    var tagCount = _.reduce(tags, function(accObj, word){
      if(accObj[word]){
        accObj[word]++;
      } else {
        accObj[word] = 1;
      }
      return accObj;
    }, {});
    var tagCountsArray = [];
    for(let key in tagCount){
      tagCountsArray.push([key, tagCount[key]]);
    }
    tagCountsArray.sort(function(a, b){
      return b[1] - a[1];
    });
    var top3arr = tagCountsArray.slice(0, 3);
    var top3Tags = _.map(top3arr, function(tagAndCountArr){
      return tagAndCountArr[0];
    });
    return top3Tags;
};  

var genderCount = function(array) {
  var male = 0;
  var female = 0;
  var transgender = 0;
  array.forEach((customer) => {
    if (customer.gender === "male") {
      male++;
    } else if (customer.gender === "female") {
      female++;
    } else if (customer.gender === "non-binary") {
      transgender++;
    }
  });
  return {
    male: male,
    female: female,
    'non-binary': transgender
  };
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
