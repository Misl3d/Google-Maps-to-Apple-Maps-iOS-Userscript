// ==UserScript==
// @name         Google Maps to Apple Maps Redirect
// @version      1.0
// @author       Misl3d
// @match        https://www.google.com/maps/dir/*
// @downloadURL  https://gist.github.com/Misl3d/4a0da2948b30df697cabddc8465dbaea/raw/OpenAppleMaps.user.js
// @updateURL    https://gist.github.com/Misl3d/4a0da2948b30df697cabddc8465dbaea/raw/OpenAppleMaps.user.js
// @homepage     https://gist.github.com/Misl3d/4a0da2948b30df697cabddc8465dbaea/
// ==/UserScript==

(function() {
    'use strict';

    if (window.self !== window.top) return; // exit if in an iframe
    if (window.location.pathname === '/redirect') return; // exit if opening link in browser from app

    // Get the URL after 'dir//'
    const url = window.location.href;
    const addressMatch = url.match(/dir\/{2}([^\/]+)\//);

    if (addressMatch && addressMatch[1]) {
        const addressPart = addressMatch[1].replace(/\+/g, ' '); // replace '+' with spaces
        const appleMapsUrl = `maps://?q=${encodeURIComponent(addressPart)}`;

        // Redirect to the new Apple Maps link
        window.location.href = appleMapsUrl;
    }
})();