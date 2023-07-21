let browser = Aliases.browser;

function EndTransaction()
{
  //CLick on End transaction button
  browser.commonControl.endTransactionButton.Click();
  //Verify end transaction popup appears
  aqObject.CheckProperty(browser.commonControl.endTransactionPopupHeader , "Exists", cmpEqual, true);
  //Verify end ytransaction popup header
  aqObject.CheckProperty(browser.commonControl.endTransactionPopupHeader , "contentText", cmpEqual, "End Transaction!");
  // Verify end transaction button on popup
  aqObject.CheckProperty(browser.commonControl.endTransactionPopupButton , "Exists", cmpEqual, true);
  //Verify end transaction button is disabled
  
  
  //Verify cancel button on popup
  aqObject.CheckProperty(browser.commonControl.cancelPopupButton , "Exists", cmpEqual, true);
  
  //Enter reason to end transaction
  browser.commonControl.reasonForEndingTransactionTextField.Keys("Test");
  
  //CLick on end transaction button
  browser.commonControl.endTransactionPopupButton.Click();
                                                                                                                                          //Wait until receives contact center agent page
  aqObject.CheckProperty(browser.medDispensePage.contactCenterAgentHeader , "contentText", cmpEqual, "Contact Center Agent");
}

module.exports.EndTransaction = EndTransaction;

