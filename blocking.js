var blockurls=
["https://www.google-analytics.com/analytics.js",
  "https://www.googletagservices.com/tag/js/gpt.js",
  "https://dev.visualwebsiteoptimizer.com/",
  "https://adservice.google.co.id/",
  "https://securepubads.g.doubleclick.net/",
  "http://lorempixel.com/",
  "https://cdn.onesignal.com/sdks/",
  "://connect.facebook.net/",
  "https://www.googletagmanager.com/",
  "https://googleads.g.doubleclick.net/",
  "https://s2.bukalapak.com/ast/chat",
  "https://www.bukalapak.com/sounds/notif.mp3",
  "https://bam.nr-data.net",
  "cloudfront.net/atrk.js",
  "ssl.google-analytics.com",
  "https://web.facebook.com/ajax/typeahead/first_degree.php",
  "WooCommerce.woff","http://code.jquery.com/ui/1.11.4/themes","https://ads.exoclick.com/ads.js",
  "https://ads.id/uploads/banner"];
  var blockcaptcha=[];
  // ["https://www.google.com/recaptcha/api.js",
  // "https://www.gstatic.com/recaptcha/api2/"];
  blockurls=blockurls.concat(blockcaptcha);
  var bukalapakapplication=
  "https://s0.bukalapak.com/ast/application";
 function getconditions(){
 var xmatcher=new Array();
			for(var i=0;i<blockurls.length;i++){
			var matcher= new chrome.declarativeWebRequest.RequestMatcher({
              url: {  urlContains: blockurls[i] },
             resourceType:[ "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket"]
				});
			xmatcher.push(
				matcher
				);
			}
			return xmatcher;
}
function getactions(){
var actions=new Array();
for(var i=0;i<blockurls.length;i++){
	actions.push(new chrome.declarativeWebRequest.CancelRequest());
}
return actions;
}
 var ruleblock = {
        conditions:getconditions(),
		
        actions: [new chrome.declarativeWebRequest.CancelRequest()]};
 
var ruleredirect={
conditions:[
new chrome.declarativeWebRequest.RequestMatcher({
url:{urlContains:bukalapakapplication}
})],
actions:[
new chrome.declarativeWebRequest.RedirectRequest({redirectUrl:chrome.extension.getURL("bukalapakapplication.js")})
]} 
 chrome.declarativeWebRequest.onRequest.addRules([ruleblock]);