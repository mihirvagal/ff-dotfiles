// set browser startup page, newtabpage, and homepage to about:home
user_pref("browser.startup.page", 1);
user_pref("browser.startup.homepage", "about:home");
user_pref("browser.newtabpage.enabled", true);

// enable geolocation services
user_pref("geo.provider.ms-windows-location", true); // [WINDOWS]

// custom DoH provides
user_pref("network.trr.uri", "https://dns.quad9.net/dns-query");
user_pref("network.trr.custom_uri", "https://dns.quad9.net/dns-query");

// enable disk cache
user_pref("browser.cache.disk.enable", true);

// enable HTTP background request
user_pref("dom.security.https_only_mode_send_http_background_request", true);

// not set FF in private browsing mode
user_pref("browser.privatebrowsing.autostart", false);

// enable favicons in history and bookmarks
user_pref("browser.chrome.site_icons", true);
user_pref("browser.shell.shortcutFavicons", true);

// enable cache storage
user_pref("browser.cache.dish.enable", true);
user_pref("broser.sessionstore.privacy_level", 0);

// enable session restore after reboot
user_pref("toolkit.winRegisterApplicationRestart", true);
