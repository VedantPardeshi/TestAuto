  var createPatient = require("CreatePatient");
  var aqHttpRequest;
  var responseBody;
  var aqHttpResponse;
  var requestBody;
  var requestUrl;
  var jsonResponseBody;
  var rxId;
  var rxNumber;
  var patientId = Project.Variables.patientID;
 
  //Create New Patient
  function createRx(){
  rxId ="rxId" +Math.floor(100000 + Math.random() * 900000);
  rxNumber="rxNumber" +Math.floor(100000 + Math.random() * 900000);
  
  //Request url for create rx.
  requestUrl= Project.Variables.rxBaseUrl + "putRx";
  
  //Request body for create rx.
  requestBody = '{"prescriptionId":"'+rxId+'","patientId":"'+patientId+'","prescriptionNumber":"'+rxNumber+'","status":"Active","prescriber":{"prescriberId":"Prescriber-123","name":{"title":"Dr.","firstName":"M.","middleName":"Montgomery","lastName":"Burns","suffix":"Jr."},"address":{"street":"123 Anystreet, top floor","city":"Toronto","state":"Ontario","country":"Canada","postalCode":"M8C 1F6"},"phone":"555 123-4567"},"pharmacy":{"storeId":"7354983","name":"Pharmacy Name","phone":"1 (800) 555-1234","address":{"street":"123 Anystreet, top floor","city":"Toronto","state":"Ontario","country":"Canada","postalCode":"M8C 1F6"}},"writtenDetail":{"prescribedAsBrand":false,"productName":"Januvia","prescribedRefills":6,"writtenDate":"2022-01-11T09:25:32.602Z","ndc10":"0006-0112-31","deaCode":"C0","prescribedQuantity":{"value":30,"unit":"ML"}},"directions":{"text":"take one tablet every morning","foreignText":null},"rarStatus":"Pending","refillAuthorizationRequestMode":"Internal"}'
  Log.Message("createRx RequestBodyData:"+ requestBody);
  
  //Create the aqHttpRequest object
   aqHttpRequest = aqHttp.CreateRequest("PUT", requestUrl);
  
  //Specify the Content-Type header value
  aqHttpRequest.SetHeader("Content-Type", "application/json");
 
  // Send the request, create the aqHttpResponse object
  responseBody = aqHttpRequest.Send(requestBody);
  Log.Message("createRx status code:"+responseBody.StatusCode);
  createPatient.verifyStatusCode(responseBody, 201);  
 }

//Get newly created patient
  function getRx(){
  //Request url for get rx.
   requestUrl = Project.Variables.patientBaseUrl + patientId +"/rx";
   aqHttpRequest = aqHttp.CreateGetRequest(requestUrl);
   
   //Send the request, get an aqHttpResponse object
   responseBody = aqHttpRequest.Send();
   Log.Message("getRx response is: "+responseBody);
   
   //Verify status code.
   createPatient.verifyStatusCode(responseBody, 200);
  }
  
  //Store Rx id.
  function storeRxDetails(){
    jsonResponseBody = JSON.parse(responseBody);
    rxId= jsonResponseBody[0].prescriptionId;
    Log.Message("getRx prescriptionId from response: "+rxId);
    Project.Variables.rxId= rxId;
    Log.Message("getRx rx id is"+Project.Variables.rxId);
  }

  