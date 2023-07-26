var NavigateAndSignInToMedDispense = require("NavigateAndSignInToMedDispense");
var VerifyContactCenterAgentPage = require("VerifyContactCenterAgentPage")
var LogoutMeddispense = require("LogoutMeddispense");

function TC_96658(){
  //Navigate To meddispense
  NavigateAndSignInToMedDispense.navigateToMedDispense();
  NavigateAndSignInToMedDispense.signIn();
  NavigateAndSignInToMedDispense.submitPin();
  
  //Verify UI of Contact Center Agent Page
  VerifyContactCenterAgentPage.VerifyUIforContactCenterAgentPage();
  VerifyContactCenterAgentPage.VerifyUIforSettingsButton();
  
  //Logout
  LogoutMeddispense.logout();
}
