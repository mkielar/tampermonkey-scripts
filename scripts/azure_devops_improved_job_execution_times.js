// ==UserScript==
// @name         Azure DevOps - Improved Job Execution Times
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Redesigns Azure DevOps / Pipelines Job Execution Time Markers.
// @author       mkielar
// @license      MIT
// @match        https://dev.azure.com/*/*/_build/results?*
// @match        https://dev.azure.com/*/*/_git/*/pullrequest/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle (`
        a.job-row > span.text-ellipsis, div.stage-card-primary > div.stage-progress-row > span.text-ellipsis {
            background-color: #005ba1;
            overflow: unset;
            border-radius: 16px;
            padding: 0 8px;
        }
        a.job-row > span.text-ellipsis > span.bolt-time-item, div.stage-card-primary > div.stage-progress-row > span.text-ellipsis > span.bolt-time-item {
            color: #ffffff !important;
        }
    `)
})();