// ==UserScript==
// @name         GCloud Columns Width Fix
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Redesigns some GCloud Tables/Columns width to better visualise contents.
// @author       mkielar
// @license      MIT
// @match        https://console.cloud.google.com/cloud-build/*
// @run-at       document-start
// @grant        GM_addStyle
// @grant        window.onurlchange
// @run-at      document-idle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle (`
      .cfc-table-cell-truncation-or-extender-template {
          max-width: 1024px !important;
      }
    `)
})();