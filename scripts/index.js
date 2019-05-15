/**
 * JavaScript to add menu items to an HTML unordered list, demonstrating either
 * a menu that would be presented to an Authenticated Member or to an ordinary
 * user (a Guest User).
 *
 * The `window.onload` function at the end of this file defines a handler for the DOM's
 * [`load` event](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event),
 * which simply calls the `setActiveMenu` function (see below) with a
 * [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value to
 * add the menu items for the Guest User's Authentication navbar to the navbar
 * container, or a [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value
 * to add the menu items for an Authenticated Member's Member Action menu to the navbar
 * container instead.
 *
 * The functions inside the `window.conversagence` object are not meant to be shining examples
 * of production-quality JavaScript, but they get the job done.
 */

window.conversagence = {
  getAuthnMenuUL: (document, className) => document.getElementsByClassName(className)[0].getElementsByTagName("UL")[0],

  // The next two methods are broken out for what should be obvious reasons: think OCP.
  menuItemsForGuest: () => {
    return [
      '<button class="styled emphasis" type="button" id="sign-up">Sign Up</button>',
      '<button class="styled" type="button" id="sign-in">Sign In</button>',
      '<span class="authn--greeting">Hello, Guest!</span>'
    ];
  },

  menuItemsForMember: () => {
    return [
      '<button class="styled emphasis" type="button" id="new-post">New Post</button>',
      '<button class="styled" type="button" id="your-profile">Your Profile</button>',
      '<button class="styled" type="button" id="sign-out">Sign Out</button>',
      '<span class="authn--greeting">Hello, J Random Member!</span>'
    ];
  },

  // Why the old-style `function` rather than the new arrow function? To set `this` to
  // `window.conversagence` rather than `Window`.
  loadMenus: function(isGuest = true) {
    const sourceItems = isGuest ? this.menuItemsForGuest : this.menuItemsForMember;
    items = sourceItems().map(item => "<li>" + item + "</li>");
    return items.join("");
  },

  setActiveMenu: function(isGuest, containerClassName = "authn--container") {
    this.getAuthnMenuUL(document, containerClassName).innerHTML = this.loadMenus(isGuest);
  }
}; // window.conversagence

window.onload = event => {
  window.conversagence.setActiveMenu(true); // for Guest User menu
  // window.conversagence.setActiveMenu(false); // for Authenticated Member menu
};
