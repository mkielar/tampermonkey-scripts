// ==UserScript==
// @name         Azure DevOps PR Description Textarea Monospace Font
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Redesigns Azure DevOps PR Description Textarea to use a monospace font when editing.
// @author       mkielar
// @license      MIT
// @match        https://dev.azure.com/*/*/_git/*/pullrequest/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle (`
      div.repos-pr-description {
        max-width: none !important;
      }
      div.repos-pr-description textarea {
        font-family: "Menlo", "DejaVu Sans Mono", "Liberation Mono", "Consolas", "Ubuntu Mono", "Courier New", "andale mono", "lucida console", monospace;
        font-size: 0.8125rem;
      }
    `)
})();