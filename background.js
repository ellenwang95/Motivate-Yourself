//redirecting to motivational page
var callback = function(details) {
	return {redirectUrl: "http://fizzle.co/sparkline/motivation"};
};
var filter = {urls: ["*://www.youtube.com/*", "*://www.facebook.com/*", "*://www.tumblr.com/*",
                     "*://www.twitter.com/*", "*://www.yesstyle.ca/*", "*://www.yesstyle.com/*"]};
var opt_extraInfoSpec = ["blocking"];

chrome.webRequest.onBeforeRequest.addListener(callback, filter, opt_extraInfoSpec);

