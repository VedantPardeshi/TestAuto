  var requestJsonBody;
  var aqHttpRequest;
  var responseBody;
  var patientId;
  var aqHttpResponse;
  var requestBody;
  var fhirId;
  var firstName;
  var lastName;
  var requestUrl;
  var jsonResponseBody;
  
  //Generate dynamic data for create petient request body
 function generateDynamicData(){
  patientId ="PID" +Math.floor(100000 + Math.random() * 900000);
  firstName ="Raj" +Math.floor(100000 + Math.random() * 900000);
  lastName ="Patil" +Math.floor(100000 + Math.random() * 900000);
  fhirId ="FHR" +Math.floor(100000 + Math.random() * 900000);
  Log.Message("generateDynamicData Patient Id: "+patientId+" First Name: "+firstName+" Last Name: "+lastName);
 }
 
  //Create New Patient
  function createPatient(){
  requestUrl= Project.Variables.patientBaseUrl + "SavePatient";
  requestBody = '{"address":{"street":"127 Green Apple Road","city":"Sacramento","state":"California","country":"US","postalCode":"00812"},"dateOfBirth":"1959-02-03","email":"email@testing.com","fhirId":"'+fhirId+'","language":"en","name":{"title":"Mr.","firstName":"'+firstName+'","middleName":"M.","lastName":"'+lastName+'","suffix":"II"},"patientId":"'+patientId+'","idType":"EPI","phone":"916-812-6641","privacyConsent":{"active":true,"start":"2021-12-01T19:25:32.602Z","end":null},"sex":"Male","fyis":[{"comment":"A very nice person","typeId":"41000058","typeName":"Drug-Seeking Behavior"}]}'
  Log.Message("createPatient RequestBodyData:"+ requestBody);
  
  // Create the aqHttpRequest object
   aqHttpRequest = aqHttp.CreateRequest("PUT", requestUrl);
  
  // Specify the Content-Type header value
  aqHttpRequest.SetHeader("Content-Type", "application/json");
 
  // Send the request, create the aqHttpResponse object
  responseBody = aqHttpRequest.Send(requestBody);
  Log.Message("createPatient status code:"+responseBody.StatusCode);
  verifyStatusCode(responseBody, 201);  
 }

//Get newly created patient
  function getPatient(){
   const requestUrl = Project.Variables.patientBaseUrl+patientId;
   aqHttpRequest = aqHttp.CreateGetRequest(requestUrl);
   //Send the request, get an aqHttpResponse object
   responseBody = aqHttpRequest.Send();
   Log.Message("getPatient response is: "+responseBody);
   verifyStatusCode(responseBody, 200); 
   storePatientDetails();
  }

  //Store required patient details
  function storePatientDetails(){
    jsonResponseBody = JSON.parse(responseBody);
    patientId= jsonResponseBody.patientId;
    Log.Message("PatinetID from response: "+patientId);
    Project.Variables.patientID= patientId;
    Log.Message(Project.Variables.patientID);
  }

  //Verify status code
 function verifyStatusCode(responseBody, expectedStatusCode){
  if(responseBody.StatusCode==expectedStatusCode){
    Log.Message("verifyStatusCode status code is: "+responseBody.StatusCode);
  }else{
    Log.Error("verifyStatusCode Status code is incorrect. Expected status code is: "+expectedStatusCode)
  }
 }
module.exports.verifyStatusCode = verifyStatusCode;