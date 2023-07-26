function VerifyUIforContactCenterAgentPage(){
 //Verify Queued tasks indicator
  aqObject.CheckProperty(Aliases.browser.medDispensePage.queuedTaskIndicator, "contentText", cmpContains, "Queued Task(s)");
  Log.Message("Queued tasks indicator Validated successfully");
  
  //Verify Session timer
  aqObject.CheckProperty(Aliases.browser.medDispensePage.sessionTimer, "Exists", cmpEqual, true);
  Log.Message("Session timer Validated successfully");
  
  //Verify username dropdown 
  aqObject.CheckProperty(Aliases.browser.medDispensePage.panelVedantpardeshiMedplatformBo, "Exists" , cmpEqual , true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.panelVedantpardeshiMedplatformBo, "contentText" , cmpEqual , Project.Variables.LoginUsername);
  Log.Message("username dropdown Validated successfully");
  
  //Verify Help link
  aqObject.CheckProperty(Aliases.browser.medDispensePage.linkLaunchHelp , "Exists" , cmpEqual , true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.linkLaunchHelp , "contentText" , cmpEqual , "Help");
  Log.Message("Help link Validated successfully");
  
  //Verify MedDispense Title
  aqObject.CheckProperty(Aliases.browser.medDispensePage.imageCompanyLogo, "Exists", cmpEqual, true);
  Log.Message("MedDispense Title Validated successfully");
  
  //Verify medAvail version
  aqObject.CheckProperty(commonControls.medavailVersion , "contentText" , cmpEqual , Project.Variables.medavailVersion);
  Log.Message("medAvail version Validated successfully");
  
  //Verify Settings button
  aqObject.CheckProperty(Aliases.browser.medDispensePage.buttonSettings, "contentText", cmpEqual, "Settings");
  aqObject.CheckProperty(Aliases.browser.medDispensePage.buttonSettings, "Exists", cmpEqual, true);
  Log.Message("Settings button Validated successfully");
  
  //Verify Settings button is enabled
  aqObject.CheckProperty(Aliases.browser.medDispensePage.buttonSettings, "className", cmpContains, "blueButton");
  Log.Message("Settings button is enabled Validated successfully");
  
  //Verify 'Contact Center Agent' text
  aqObject.CheckProperty(Aliases.browser.medDispensePage.contactCenterAgentHeader, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.contactCenterAgentHeader, "contentText", cmpEqual, "Contact Center Agent");
  Log.Message("'Contact Center Agent' text Validated successfully");
  
  //Verify 'Current Status' dropdown list with status 'Available'
  aqObject.CheckProperty(Aliases.browser.medDispensePage.currentStatusText, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.currentStatusText, "contentText", cmpEqual, "Current Status");
  aqObject.CheckProperty(Aliases.browser.medDispensePage.availableStatusText, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.availableStatusText, "contentText", cmpContains, "Available");
  Log.Message("'Current Status' dropdown list with status 'Available' Validated successfully");
  
  //'Last Poll Time' with time
  aqObject.CheckProperty(Aliases.browser.medDispensePage.lastPollTimeText, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.lastPollTimeText, "contentText", cmpEqual, "Last Poll Time");
  aqObject.CheckProperty(Aliases.browser.medDispensePage.lastPollTime, "Exists", cmpEqual, true);
  Log.Message("'Last Poll Time' with time Validated successfully");
  
  //Verify 'Waiting for task...' text
  aqObject.CheckProperty(Aliases.browser.medDispensePage.waitingForTaskText, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.waitingForTaskText, "contentText", cmpEqual, "Waiting for task...");
  Log.Message("'Waiting for task...' text Validated successfully");
 }

function VerifyUIforSettingsButton(){
  
  //Click on Settings button
  Aliases.browser.medDispensePage.buttonSettings.Click();
  Log.Message("Clicked on Settings button");
  
  //Verify 'MedDispense has detected your camera and microphone.' text. 'Refresh' icon enabled
  aqObject.CheckProperty(Aliases.browser.medDispensePage.meddispenseHasDetectedYourCamerAndMicrophoneText, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.meddispenseHasDetectedYourCamerAndMicrophoneText, "contentText", cmpEqual, "MedDispense has detected your camera and microphone.");
  aqObject.CheckProperty(Aliases.browser.medDispensePage.refreshIcon, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.refreshIcon, "Enabled", cmpEqual, true);
  Log.Message("'MedDispense has detected your camera and microphone.' text. 'Refresh' icon enabled Validated successfully");
  
  //Verify 'Camera' header text with detected camera details
  aqObject.CheckProperty(Aliases.browser.medDispensePage.cameraHeaderText, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.cameraHeaderText, "contentText", cmpEqual, "Camera");
  aqObject.CheckProperty(Aliases.browser.medDispensePage.cameraDetailsText, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.cameraDetailsText, "contentText", cmpEqual, Project.Variables.CameraDetails);
  Log.Message("'Camera' header text with detected camera details Validated successfully");
  
  //Verify Camera section with 'Test' button
  aqObject.CheckProperty(Aliases.browser.medDispensePage.cameraTestButton, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.cameraTestButton, "contentText", cmpEqual, "Test");
  aqObject.CheckProperty(Aliases.browser.medDispensePage.cameraSection, "Exists", cmpEqual, true);
  Log.Message("Camera section with 'Test' button Validated successfully");
  
  //Verify 'Microphone' header text with detected Microphone details
  aqObject.CheckProperty(Aliases.browser.medDispensePage.microphoneText, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.microphoneText, "contentText", cmpEqual, "Microphone");
  aqObject.CheckProperty(Aliases.browser.medDispensePage.microphoneDetailsText, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.microphoneDetailsText, "contentText", cmpEqual, Project.Variables.MicrophoneDetails);
  Log.Message("'Microphone' header text with detected Microphone details Validated successfully");
  
  //Verify 'Speakers' header text with detected Speakers details
  aqObject.CheckProperty(Aliases.browser.medDispensePage.speakersText, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.speakersText, "contentText", cmpEqual, "Speakers");
  aqObject.CheckProperty(Aliases.browser.medDispensePage.headsetIcon, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.headsetDetailsText, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.headsetDetailsText, "contentText", cmpEqual, Project.Variables.SpeakerDetails);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.headsetTestButton, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.headsetTestButton, "contentText", cmpEqual, "Test");
   
  aqObject.CheckProperty(Aliases.browser.medDispensePage.bellIcon, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.bellIconDetailsText, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.bellIconDetailsText, "contentText", cmpEqual, Project.Variables.SpeakerDetails);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.bellTestButton, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.bellTestButton, "contentText", cmpEqual, "Test");
  Log.Message("'Speakers' header text with detected Speakers details Validated successfully");
 
  //Verify Sumbit button and click
  aqObject.CheckProperty(Aliases.browser.medDispensePage.buttonSubmit, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.medDispensePage.buttonSubmit, "contentText", cmpEqual, "Submit");
  aqObject.CheckProperty(Aliases.browser.medDispensePage.buttonSubmit, "Enabled", cmpEqual, true);
  Log.Message("Sumbit button Validated successfully");
  
  Aliases.browser.medDispensePage.buttonSubmit.Click();
  Log.Message("Clicked on Sumbit button");
}
module.exports.VerifyUIforContactCenterAgentPage = VerifyUIforContactCenterAgentPage;
module.exports.VerifyUIforSettingsButton = VerifyUIforSettingsButton;