// https://github.com/arkenfox/user.js/wiki/
// https://github.com/mihirvagal/ff-dotfiles/

// set browser startup page, newtabpage, and homepage to about:home
user_pref("browser.startup.page", 1);
user_pref("browser.startup.homepage", "about:home");
user_pref("browser.newtabpage.enabled", true);

// Enable geolocation services
user_pref("geo.provider.ms-windows-location", true); // [WINDOWS]

// Enable HTTP background request
user_pref("dom.security.https_only_mode_send_http_background_request", true);

// Enable favicons in history and bookmarks
user_pref("browser.chrome.site_icons", true);
user_pref("browser.shell.shortcutFavicons", true);

// Enable cache storage
user_pref("browser.cache.disk.enable", true);
user_pref("broser.sessionstore.privacy_level", 0);

// DNS over HTTPS
// Uses Quad9
user_pref("network.trr.uri", "https://mozilla.cloudflare-dns.com/dns-query");
user_pref("network.trr.mode", 2);

// Enable session restore after reboot
user_pref("toolkit.winRegisterApplicationRestart", true);

// Disable safe browsing
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);

// Leave IPv6 enabled
user_pref("network.dns.disableIPv6", false);

// Re-enable search engines
user_pref("keyword.enabled", true);

// Enable Search Engine suggestion
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);

// Enable favicons, the icons in bookmarks
user_pref("browser.shell.shortcutFavicons", true);

// Disable auto-play
user_pref("media.autoplay.default", 5);
user_pref("media.autoplay.blocking_policy", 2);

// Use Disconnect's blocklist to block ads
user_pref("browser.contentblocking.category", "strict");

// Delete cookies on close
user_pref("network.cookie.lifetimePolicy", 2);

// Disable password manager
user_pref("signon.rememberSignons", false);

// Disable Pocket
user_pref("extensions.pocket.enabled", false);
