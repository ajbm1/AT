// ==UserScript==
// @name         AutoTrimps-Zekbeta
// @version      1.0-Zekbeta
// @namespace    https://Zorn192.github.io/AT
// @updateURL    https://Zorn192.github.io/AT/.user.js
// @description  Automate all the trimps!
// @author       zininzinin, spindrjr, Ishkaru, genBTC, Zeker0
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @connect      *Zorn192.github.io/AT*
// @connect      *trimps.github.io*
// @connect      self
// @grant        none
// ==/UserScript==

var script = document.createElement('script');
script.id = 'AutoTrimps-Zekbeta';
//This can be edited to point to your own Github Repository URL.
script.src = 'https://Zorn192.github.io/AT/AutoTrimps2.js';
//script.setAttribute('crossorigin',"use-credentials");
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
