// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

function makeContact(id, nameFirst, nameLast) {
    //create contact by assigning parameters into key/value pairs within an 
    //object.
    return { id: id,
           nameFirst: nameFirst,
           nameLast: nameLast
           };
} 


function makeContactList() {
    //create an empty array to store contacts.
    var contacts = [];
    //create a contact-list that manages contacts, and includes length,
    //addContact, findContact, removeContact, and printAllContactNames 
    //properties.
    return {
    //length property is a function that returns the length of the contacts
    //array, thus the total number of contacts.
        length: function() {
            return contacts.length;
        },
    //addContact property stores newly created contacts in the contact array.
        addContact: function(contact) {
            contacts.push(contact);
        },
    //findContact property takes a fullName parameter and searches for that
    //name in the contacts array.
        findContact: function(fullName) {
    //use a for loop to iterate through the contacts array to see if there
    //is a match.
            for(var i = 0; i < contacts.length; i++){
    //use .nameFirst and .nameLast properties of each contact to compare to 
    //the fullName parameter.
                if(contacts[i].nameFirst + ' ' + contacts[i].nameLast === fullName) {
                    return contacts[i];
                } else {
    //return the contact if there is a match, otherwise return undefined.
                    return undefined;
                }
            }
        },
    //use array method .pop() to remove a specified contact.
        removeContact: function(contact) {
            return contacts.pop(contact);
        },
    //create a property which prints just the name of each contact.
        printAllContactNames: function(contact) {
    //create an empty array to store the names.
            var printContacts = [];
    //use a for loop to iterate through the contacts array and populate the 
    //empty array with the full name of each contact.
            for(var i = 0; i < contacts.length; i++){
                printContacts.push(contacts[i].nameFirst + ' ' + contacts[i].nameLast);
    //return the list using .join() to create a new line for each full name.
            } return printContacts.join("\n");
        }
        
    };
}


// function makeContactList() {
//     /*
//      * You need something here to hold contacts. See length api for a hint:
//      */
//     var contacts;
    
//     return {
//         // we implemented the length api for you //
//         length: function() {
//             return contacts.length;
//         }
//     }
// }


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
