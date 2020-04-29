//first create a object(key:value array)
var myCookies = {};

//this function will be used to store the cookie data inside the object, myCookie
function saveCookies(){
  //so here we get the first key it's value, the userName input value
  myCookies["userName"] = document.getElementById("userName").value;
  //we will perform this same thing till we gather all the input field data in a key value pair in this object/cookie
  myCookies["password"] = document.getElementById("password").value;
  myCookies["passwordVerify"] = document.getElementById("passwordVerify").value;
  myCookies["firstName"] = document.getElementById("firstName").value;
  myCookies["lastName"] = document.getElementById("lastName").value;
  myCookies["email"] = document.getElementById("email").value;
  myCookies["phoneNumber"] = document.getElementById("phoneNumber").value;
  //start reusable code

  //here we get rid of any already exisiting cookie for this site by assigning it to blank/none
  document.cookie ="";
  //now we are going to set a expiry time for the cookie
  var expiresAttrib = Date(Date.now() + 60 * 1000).toString();
  //now we need to store the cookie in a string
  var cookieString = "";
  for (var key in myCookies) {
    cookieString = key + "=" + myCookies[key] + ";" + expiresAttrib + ";";
    //now we need to save the cookie
    document.cookie = cookieString;
  }
  //end of the reusable code
  document.getElementById('out').innerHTML = document.cookie;
}

function loadCookies(){
  //start reusable code
  //here we emptied the array if something was in there
  myCookies = {};
  var kv = document.cookie.split(";");
  for(var id in kv){
    var cookie = kv[id].split("=");
    myCookies[cookie[0].trim()] = cookie[1];
  }
  //end reusable code
  document.getElementById("userName").value = myCookies["userName"];
  document.getElementById("password").value = myCookies["password"];
  document.getElementById("passwordVerify").value = myCookies["passwordVerify"];
  document.getElementById("firstName").value = myCookies["firstName"];
  document.getElementById("lastName").value = myCookies["lastName"];
  document.getElementById("email").value = myCookies["email"];
  document.getElementById("phoneNumber").value = myCookies["phoneNumber"];



  //clear cookie
  var allCookies = document.cookie.split(';');
  // The "expire" attribute of every cookie is
  // Set to "Thu, 01 Jan 1970 00:00:00 GMT"
  for (var i = 0; i < allCookies.length; i++)
      document.cookie = allCookies[i] + "=;expires="
      + new Date(0).toUTCString();
}




function saveCookiesAgain(){

  myCookies["FatherFirstName"] = document.getElementById("FatherFirstName").value;
  myCookies["FatherLastName"] = document.getElementById("FatherLastName").value;
  myCookies["MotherFirstName"] = document.getElementById("MotherFirstName").value;
  myCookies["country"] = document.getElementById("country").value;
  myCookies["userName"] = document.getElementById("userName").value;
  myCookies["password"] = document.getElementById("password").value;
  myCookies["passwordVerify"] = document.getElementById("passwordVerify").value;
  myCookies["firstName"] = document.getElementById("firstName").value;
  myCookies["lastName"] = document.getElementById("lastName").value;
  myCookies["email"] = document.getElementById("email").value;
  myCookies["phoneNumber"] = document.getElementById("phoneNumber").value;
  //start reusable code

  //here we get rid of any already exisiting cookie for this site by assigning it to blank/none
  document.cookie ="";
  //now we are going to set a expiry time for the cookie
  var expiresAttrib = Date(Date.now() + 60 * 1000).toString();
  //now we need to store the cookie in a string
  var cookieString = "";
  for (var key in myCookies) {
    cookieString = key + "=" + myCookies[key] + ";" + expiresAttrib + ";";
    //now we need to save the cookie
    document.cookie = cookieString;
  }
  //end of the reusable code
}





function loadCookiesAgain(){
  //start reusable code
  //here we emptied the array if something was in there
  myCookies = {};
  var kv = document.cookie.split(";");
  for(var id in kv){
    var cookie = kv[id].split("=");
    myCookies[cookie[0].trim()] = cookie[1];
  }
  //end reusable code
  document.getElementById("FatherFirstName").innerHTML = myCookies["FatherFirstName"];
  document.getElementById("FatherLastName").innerHTML = myCookies["FatherLastName"];
  document.getElementById("MotherFirstName").innerHTML = myCookies["MotherFirstName"];
  document.getElementById("country").innerHTML = myCookies["country"];
  document.getElementById("userName").innerHTML = myCookies["userName"];
  // document.getElementById("password").innerHTML = myCookies["password"];
  // document.getElementById("passwordVerify").innerHTML = myCookies["passwordVerify"];
  document.getElementById("firstName").innerHTML = myCookies["firstName"];
  document.getElementById("lastName").innerHTML = myCookies["lastName"];
  document.getElementById("email").innerHTML = myCookies["email"];
  document.getElementById("phoneNumber").innerHTML = myCookies["phoneNumber"];



  //clear cookie
  var allCookies = document.cookie.split(';');
  // The "expire" attribute of every cookie is
  // Set to "Thu, 01 Jan 1970 00:00:00 GMT"
  for (var i = 0; i < allCookies.length; i++)
      document.cookie = allCookies[i] + "=;expires="
      + new Date(0).toUTCString();
}
