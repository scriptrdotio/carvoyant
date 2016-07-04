/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
// The name of the app you need to connect to, e.g, 'Nest'
var app = "test_carvoyant";

// The URL prefix to all the app's APIs
var apiUrl = "https://sandbox-api.carvoyant.com/sandbox/api"; // sandbox is for testing, replace with production when convenient"

// API version to use (can be empty)
var apiVer = "";

// OAuth 2.0: Authorization URI - step1 of OAuth process
var authorizationUrl = "https://sandbox-auth.carvoyant.com/OAuth/authorize"; 

// OAuth 2.0: Authorization URI - step2 of OAuth process (if response_type is "code" usually)
var accessTokenUrl = ""; // example

// OAuth 2.0 Client ID
var client_id = ""; // example

// OAuth 2.0 grant type, can be left empty
var grantType = "authorization_code";

// Client (consumer) secret
var client_secret = ""; // example

// The OAuth 2.0 type of the returned credential (can be "code" or "token")
var response_type = "token";

// Possible values for "scope", i.e. authorizations requested from users. Can be empty
var scope = "";

// Where the 3rd party app should send the user after the user grants or denies consent. 
// Optional if you have only specified one callback URI for your application in the settings on
var redirect_uri = "https://api.scriptr.io/modules/carvoyant/oauth2/getAccessToken.js?auth_token=YOUR_SCRIPTR.IO_AUTH_TOKEN_OR_ANONYMOUS_TOKEN";

// Some OAuth API do not redirect the parameters you send to the authorization URL so you have
// to add them to the redirectUrl. Notably we need to send the "state" in order to match the
// access token to a user. Set the below to "true" if you need the "state" to be added to the 
// query string of the callback URL
var addStateToRedirectUrl = false;

//optional. Chec your target API for values (e.g. "offline)
var access_type="";

//the name of the field used by the OAuth API to return the access token
var accessTokenFieldName = "access_token";

//the name of the field used by the OAuth API to return the refresh token, if any
var refreshTokenFieldName = "refresh_Token";

// generate a random state to be used in the oauth 2 process' steps
var state = (function() {
  return ('xxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
  }));
})();

function getAuthUrl() {
  
  return {

    "url": authorizationUrl,
    "state": state
  }
}		   				   				
