// ==UserScript==
// @name         AWS SSO Auto-expand
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Automatically expand AWS SSO Portal Application and focus cursor in the search field.
// @author       mkielar
// @license      MIT
// @match        https://*.awsapps.com/start*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    const waitFor = (parent, ...selectors) => new Promise(resolve => {
        const delay = 100
        const f = () => {
            const elements = selectors.map(selector => parent.querySelector(selector))
            if (elements.some(element => element != null)) {
                resolve(elements)
            } else {
                setTimeout(f, delay)
            }
        }
        f()
    })

    const positionCoursor = function() {
        // Put cursor in the search field
        waitFor(document, 'sso-search input').then(([input]) => {
            input.focus()
        })

        // Expand Accounts List (if collapsed)
        waitFor(document, 'portal-application').then(([portalApplication]) => {
            portalApplication.click()
        })
    }

    window.onfocus = function(event) {
        console.log('Detected window reactivation, positioning coursor...')
        positionCoursor()
    }

    positionCoursor()

})();