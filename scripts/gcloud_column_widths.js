// ==UserScript==
// @name         GCloud Columns Width Fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redesigns some GCloud Tables/Columns width to better visualise contents.
// @author       mkielar
// @license      MIT
// @match        https://console.cloud.google.com/cloud-build/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle (`
      .cfc-table-cell-truncation-or-extender-template {
          max-width: 1024px !important;
      }
    `)
})();