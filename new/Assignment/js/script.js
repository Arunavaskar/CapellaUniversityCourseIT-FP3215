//for invitation page
function sub(){
    //first form rendering
    function formCreation1(){
      var s = document.createElement("section");
      s.id = "pageForm";
      s.className = "toBeRemoved";
      //create a form with action = "#"
      var f = document.createElement("form");
      f.action = "#";
      //create a label element 2
      var l2 = document.createElement("label");
      l2.htmlFor = "recipientName";
      l2.innerHTML = "Recipient name:";
      //create a input element
      var in2 = document.createElement("input");
      in2.id = "recipientName";
      in2.className = "RName";
      in2.type = "text";
      in2.name = "recipientName";
      in2.placeholder = "Enter your Recipient Name";
      //add l2 to form
      f.appendChild(l2);
      f.appendChild(in2);
      //add the form to the section
      s.appendChild(f);
      //add the section to the body of the document
      document.getElementsByTagName('body')[0].appendChild(s);
    }
    //second form rendering
    function formCreation2(){
      var s = document.createElement("section");
      s.id = "pageForm";
      s.className = "toBeRemoved";
      //create a form with action = "#"
      var f = document.createElement("form");
      f.action = "#";

      //create a label element 3
      var l3 = document.createElement("label");
      l3.htmlFor = "organizationName";
      l3.innerHTML = "Organization name:";
      //create a input element
      var in3 = document.createElement("input");
      in3.id = "organizationName";
      in3.className = "OrgName";
      in3.type = "text";
      in3.name = "organizationName";
      in3.placeholder = "Enter your Organization Name";

      //create a label element 4
      var l4 = document.createElement("label");
      l4.htmlFor = "eventDate";
      l4.innerHTML = "Event Date:";
      //create a input element
      var in4 = document.createElement("input");
      in4.id = "eventDate"
      in4.className = 'EDate';
      in4.type = "text";
      in4.name = "eventDate";
      in4.placeholder = "Enter your Event Date";

      //create a label element 5
      var l5 = document.createElement("label");
      l5.htmlFor = "websiteURL";
      l5.innerHTML = " URL:";
      //create a input element
      var in5 = document.createElement("input");
      in5.id = "websiteURL"
      in5.className = 'URL';
      in5.type = "text";
      in5.name = "websiteURL";
      in5.placeholder = "Enter your Website URL";

      //create a label element 6
      var l6 = document.createElement("label");
      l6.htmlFor = "hostName";
      l6.innerHTML = " Host name:";
      //create a input element
      var in6 = document.createElement("input");
      in6.id = "hostName";
      in6.className = 'HName';
      in6.type = "text";
      in6.name = "hostName";
      in6.placeholder = "Host Name";
      //add l3 to form
      f.appendChild(l3);
      f.appendChild(in3);
      //add l4 to form
      f.appendChild(l4);
      f.appendChild(in4);
      //add l5 to form
      f.appendChild(l5);
      f.appendChild(in5);
      //add l6 to form
      f.appendChild(l6);
      f.appendChild(in6);
      //add the form to the section
      s.appendChild(f);
      //add the section to the body of the document
      document.getElementsByTagName('body')[0].appendChild(s);
    }

      //first part of the form
      var NOV = document.getElementById('numberOfVolunteer').value;
      for (var i = 0; i < NOV; i++) {
        var person = document.createElement("h1")
        person.className = "toBeRemoved";
        person.innerHTML = "Person No." + (i + 1);
        document.getElementsByTagName('body')[0].appendChild(person);
        formCreation1();
      }
      //adding a header as a spacer for better visuals
      var spacing = document.createElement('h1');
      spacing.className = "toBeRemoved";
      document.getElementsByTagName('body')[0].appendChild(spacing);
      //second part of the form
      formCreation2();

  //SUBMIT BUTTON
  var finalSubmission = document.createElement("input");
  finalSubmission.id = 'submit'
  finalSubmission.type = 'button';
  finalSubmission.value = 'Submit';
  finalSubmission.addEventListener('click', function(){
    var arr = [];
    var name = document.getElementsByClassName('RName');
    var NOV = document.getElementById('numberOfVolunteer').value;
     for (var i = 0; i < NOV; i++) {
       arr.push(name[i].value);
     }
     //here create the article
     if (arr.length < 2) {
       console.log("if")
       document.getElementById('rn').innerHTML = arr[0];
       document.getElementById('on').innerHTML = document.getElementById('organizationName').value
       document.getElementById('ed').innerHTML = document.getElementById('eventDate').value
       document.getElementById('wu').innerHTML = document.getElementById('websiteURL').value
       document.getElementById('hn').innerHTML = document.getElementById('hostName').value
     }
    else {
      console.log("else")
      document.getElementById('rn').innerHTML = arr[0];
      for (var i = 0; i < arr.length-1; i++) {
        document.getElementById('rn').innerHTML = document.getElementById('rn').innerHTML + ", " + arr[i + 1];
      }
      document.getElementById('on').innerHTML = document.getElementById('organizationName').value
      document.getElementById('ed').innerHTML = document.getElementById('eventDate').value
      document.getElementById('wu').innerHTML = document.getElementById('websiteURL').value
      document.getElementById('hn').innerHTML = document.getElementById('hostName').value
    }
      document.getElementById("numberOfVolunteer").remove();
      var classElements =  document.getElementsByClassName("toBeRemoved");
      while(classElements.length > 0){
        classElements[0].parentNode.removeChild(classElements[0]);
      }


});


  //add the section to the body of the document
  var s = document.createElement("section");
  s.className = "toBeRemoved"
  s.appendChild(finalSubmission);
  document.getElementsByTagName('body')[0].appendChild(s);




  // removes this two elements after number of volunteer has been entered and
  // cliked on the submit button
  document.getElementById("numberOfVolunteer").style.visibility = "hidden";
  document.getElementById("LabelnumberOfVolunteer").remove();
  document.getElementById("submit").remove();
}
//for index page
//this function preloads the banner images and this function can be used to preload any
//other images.
function onpageload(){
    var images = new Array()
    function preload() {
      for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
      }
    }
    preload(
      "images/banner1.jpg",
      "images/banner2.jpg",
      "images/banner3.jpg",
      "images/firefighter.jpg",
      "images/work.jpg",
      "images/silhouette.jpg",
      "images/event.jpg",
    )
}


//banner
//here we will run the rotate function when the html page has been loaded in the window
window.onload = rotate;

var theAd = 0;
//here we collect all the images by there src attributes in an array
var adImages = new Array("images/banner1.jpg","images/banner2.jpg","images/banner3.jpg");
function rotate() {
  //in this function we will loop through the array list and change the images based on the index item from the array
     theAd++;
     if (theAd == adImages.length) {
        theAd = 0;
     }
     document.getElementById("bannerImages").src = adImages[theAd];
     // here we set a delay between each image replacement action using setTimeout to total 3000 mil sec or 3 sec. 
     setTimeout(rotate, 3 * 1000);
}




// rollover function
//1
function hoverOn1(){
  //on mouse hover, div element will have style property of block, means the element will be visible
  document.getElementById('dsc1').style.display = "block";
}
function hoverOut1(){
  //on mouse hover out, div elements will be hidden again
  document.getElementById('dsc1').style.display = "none";
}
//2
function hoverOn2(){
  //on mouse hover, div element will have style property of block, means the element will be visible
  document.getElementById('dsc2').style.display = "block";
}
function hoverOut2(){
  //on mouse hover out, div elements will be hidden again
  document.getElementById('dsc2').style.display = "none";
}
//3
function hoverOn3(){
  //on mouse hover, div element will have style property of block, means the element will be visible
  document.getElementById('dsc3').style.display = "block";
}
function hoverOut3(){
  //on mouse hover out, div elements will be hidden again
  document.getElementById('dsc3').style.display = "none";
}
//4
function hoverOn4(){
  //on mouse hover, div element will have style property of block, means the element will be visible
  document.getElementById('dsc4').style.display = "block";
}
function hoverOut4(){
  //on mouse hover out, div elements will be hidden again
  document.getElementById('dsc4').style.display = "none";
}
