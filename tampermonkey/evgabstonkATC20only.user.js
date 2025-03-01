// ==UserScript==
// @name         evgabstonkATC20only
// @namespace    http://tampermonkey.net/
// @version      2022012002
// @description  Cart from the EVGA B Stock Page
// @author       Krowve
// @downloadURL  https://github.com/krowve/evgabstonk/raw/main/tampermonkey/evgabstonkATC20only.user.js
// @updateURL    https://github.com/krowve/evgabstonk/raw/main/tampermonkey/evgabstonkATC20only.user.js
// @match        https://www.evga.com/Products/*
// @match        https://www.evga.com/products/*
// @icon         https://www.google.com/s2/favicons?domain=evga.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

// Will try to cart in listed order.
// Will only try to cart one card per page load.
// Sort by your preference.

var PRODUCTS = new Array()
// 2060 KO Gaming
// $280 - 30MH - 120w
PRODUCTS.push("06G-P4-2066-RX")
// 2060 KO Ultra Gaming
// $290 - 30MH - 120w
PRODUCTS.push("06G-P4-2068-RX")
// 2060 Gaming
// $320 - 30MH - 120w
PRODUCTS.push("06G-P4-2060-RX")
// 2060 XC Black Gaming
// $320 - 30MH - 120w
PRODUCTS.push("06G-P4-2061-RX")
// 2060 SC Ultra Gaming
// $340 - 30MH - 120w
PRODUCTS.push("06G-P4-2067-RX")
// 2060 SC Black Gaming
// $340 - 30MH - 120w
PRODUCTS.push("06G-P4-1762-RX")
// 2060 SC Gaming
// $340 - 30MH - 120w
PRODUCTS.push("06G-P4-2062-RX")
// 2060 XC Gaming
// $350 - 30MH - 120w
PRODUCTS.push("06G-P4-2063-RX")
// 2060 SC Ultra Black Gaming
// $350 - 30MH - 120w
PRODUCTS.push("06G-P4-2065-RX")
// 2060 XC Ultra Gaming
// $350 - 30MH - 120w
PRODUCTS.push("06G-P4-2167-RX")
// 2060 XC Ultra Black Gaming
// $370 - 30MH - 120w
PRODUCTS.push("06G-P4-2163-RX")
// 2060 XC Ultra Gaming
// $370 - 30MH - 120w
PRODUCTS.push("06G-P4-2166-RX")
// 2060 Super SC Ultra Gaming
// $390 - 40MH - 120w
PRODUCTS.push("08G-P4-3067-RX")
// 2060 Super Black Gaming Dual HDB Fans
// $400 - 40MH - 120w
PRODUCTS.push("08G-P4-3061-RX")
// 2060 Super Black Gaming Dual Fans
// $400 - 40MH - 120w
PRODUCTS.push("08G-P4-3062-RX")
// 2060 Super SC Ultra Black Gaming
// $400 - 40MH - 120w
PRODUCTS.push("08G-P4-3065-RX")
// 2060 Super XC Black Gaming
// $410 - 40MH - 120w
PRODUCTS.push("08G-P4-3161-RX")
// 2060 Super XC Gaming
// $430 - 40MH - 120w
PRODUCTS.push("08G-P4-3162-RX")
// 2060 Super XC Ultra Gaming
// $440 - 40MH - 120w
PRODUCTS.push("08G-P4-3163-RX")
// 2070 Black Gaming
// $450 - 40MH - 140w
PRODUCTS.push("08G-P4-1071-RX")
// 2070 XC Gaming
// $450 - 40MH - 140w
PRODUCTS.push("08G-P4-2172-RX")
// 2070 XC Ultra Gaming
// $460 - 40MH - 140w
PRODUCTS.push("08G-P4-2173-RX")
// 2070 XC Black Edition
// $480 - 40MH - 140w
PRODUCTS.push("08G-P4-2071-RX")
// 2070 Super Black Gaming
// $480 - 41MH - 140w
PRODUCTS.push("08G-P4-3071-RX")
// 2070 XC Black Edition Gaming
// $490 - 40MH - 140w
PRODUCTS.push("08G-P4-1171-RX")
// 2070 FTW3 Gaming
// $490 - 40MH - 140w
PRODUCTS.push("08G-P4-2273-RX")
// 2070 FTW3 Ultra iCX2
// $490 - 40MH - 140w
PRODUCTS.push("08G-P4-2277-RX")
// 2070 Super KO Gaming
// $500 - 41MH - 140w
PRODUCTS.push("08G-P4-2072-RX")
// 2070 Super Gaming
// $500 - 41MH - 140w
PRODUCTS.push("08G-P4-3070-RX")
// 2070 Super XC Gaming
// $510 - 41MH - 140w
PRODUCTS.push("08G-P4-3172-RX")
// 2070 Gaming
// $530 - 40MH - 140w
PRODUCTS.push("08G-P4-2070-RX")
// 2070 Super XC Ultra Gaming
// $530 - 41MH - 140w
PRODUCTS.push("08G-P4-3173-RX")
// 2070 Super FTW3 Gaming
// $540 - 41MH - 140w
PRODUCTS.push("08G-P4-3273-RX")
// 2070 Super FTW3 Ultra Gaming
// $540 - 41MH - 140w
PRODUCTS.push("08G-P4-3277-RX")
// 2070 Super FTW3 Ultra+
// $540 - 41MH - 140w
PRODUCTS.push("08G-P4-3377-RX")
// 2070 XC Black Gaming
// $550 - 40MH - 140w
PRODUCTS.push("08G-P4-2171-RX")
// 2070 Super XC Ultra+
// $550 - 41MH - 140w
PRODUCTS.push("08G-P4-3175-RX")
// EVGA GeForce 210 DDR3
//PRODUCTS.push("01G-P3-1313-RX")

     if (document.title.includes("EVGA - Products - B-Stock")) {
         var PRODUCT = ""
         for (var i = 0; i < PRODUCTS.length; i++) {
             PRODUCT = PRODUCTS[i]

             if (document.querySelector("[title*='" + PRODUCT + "']")) {
                 document.querySelector("[title*='" + PRODUCT + "']").click()
             }
         }
     }
})();
