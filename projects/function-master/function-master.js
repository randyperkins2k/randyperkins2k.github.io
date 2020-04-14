//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //using Object.values() returns all of an object's values in an array.
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //using Object.keys() returns all of the keys of an object, but in an array.
    //use .join(' ') method to join the array into a string, with spaces.
    return Object.keys(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //create empty array to store values.
    var array = [];
    //use a for/in loop to compile all of the object's values.
    for (var key in object) {
    //we only want values that are string values.
     if (typeof object[key] === 'string') {
    //push the keys into array.
     array.push(object[key]);
    }
  }
    //join the array into a string, with spaces.
  return array.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //test for array.
    if (Array.isArray(collection)) {
        return "array";
    //test for object.
    } else if (typeof collection === "object") {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //since it is a single word, we can just use the indexed value of the 
    //first letter, [0]. Then we concatenate that letter with the rest,
    //using slice.
    return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //split string into an array of individual words.
    var splitString = string.split(' ');
    //create an empty array.
    var array = [];
    //iterate through array of words, and simultaneously convert first
    //letter of each word ([i]) to upper case, and push the word into
    //the empty array.
    for (var i = 0; i < splitString.length; i++) {
      array.push(splitString[i][0].toUpperCase() + splitString[i].slice(1));
    }
    //join the array into a string.
    return array.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //we can directly access the object key/value pair of names, and concatenate
    //with the welcome message.
    return "Welcome " + object.name[0].toUpperCase() + object.name.slice(1) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //return the object name and species in a message by using dot notation
    //and the indexed values to convert to upper case.
    return object.name[0].toUpperCase() + object.name.slice(1) + " is a " 
    + object.species[0].toUpperCase() + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //use conditional statements to check if an object has a property and 
    //that it is not empty. 
    if (object.hasOwnProperty('noises') && object['noises'].length > 0) {
    //if it meets that criteria, return the values.
     return object.noises.join(' ');
   } else {
    //if it doesn't meet criteria, return a message.
       return "there are no noises";   
   }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //using .search() method, if the word is in the string, its value will
    //be zero or greater.
    if (string.search(word) > -1) {
      return true;
    } return false;
}


//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
   object.friends.push(name);
   return object; 
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //first we make sure there are keys in the object.
  if (Object.keys(object).length === 0) {
    return false;
  }
    //next, we use .includes() method to see if name is in the friends array.
  if (object.friends.includes(name)) {
    return true;
  } return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //create empty array.
  var non = [];
    //iterate through friends array. if name is not included, push into
    //empty array.
  for (var i = 0; i < array.length; i++) {
    if (array[i].name !== name && array[i].friends.includes(name) === false) {
      non.push(array[i].name);
    }
    //return the new array!
  } return non;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //assign a new key, [key], to the object, and assign the new value.
  object[key] = value;
    //return the updated object.
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //iterate through the array.
  for (var i = 0; i < array.length; i++) {
    //delete the properties listed in the array.
    delete object[array[i]];
    //return the updated object.
  } return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //we can create a new array with duplicates removed by using the Set
    //keyword.
  return [...new Set(array)];
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}