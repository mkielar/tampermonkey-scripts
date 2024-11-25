// ==UserScript==
// @name         GCloud Cloud Build Logs Indentation
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Changes CSS on "log-summary" elements to preserve whitespace in collapsed view.
// @author       mkielar
// @license      MIT
// @match        https://console.cloud.google.com/cloud-build/*
// @grant        GM_addStyle
// @grant        window.onurlchange
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle (`
      log-summary {
          white-space-collapse: preserve !important;
          white-space: pre !important;
      }
    `)
})();