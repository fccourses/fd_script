'use strict';

/**
 *
 * @param {function} howToSay
 * @param {string} whatToSay
 */
function saySomething(howToSay, whatToSay) {
  howToSay(whatToSay); //=== alert(whatToSay);
}

saySomething(alert, 'Welcome!!');
