//List of worker names
var workerNames = [
  "Dr. Brian Borowski",
  "John Cena",
  "Selena Gomez",
  "Leonardo DiCaprio"
];

//Image URLs for the workers.
var imageUrls = [
  'images/b_borowski.jpg',
  'images/j_cena.jpg',
  'images/s_gomez.jpg',
  'images/l_dicaprio.jpg'
];

//List of worker descriptions
var workerDesc = [
  "Having found nothing but misfortune in his house work, this Computer Science Professor has dedicated his life to ensuring that no one has ever again to deal with these problems, no matter the cost.",
  "Coming to your house this Sunday night, it's the one man who makes any clog flee into the sewers. It's JOHN CENA!!!",
  "When you need a plumber... But not just any plumber... The ONE plumber in the entire world who can honestly claim to have dated THE J-Beibz.... You call Selena Gomez. WARNING: Seduction may occur. Hands for Hire is not responsible for any excessive hotness you may encounter.",
  "Growing tired of the life of an actor, Leonardo DiCaprio has resolved to find a more challenging line of work to test himself agianst. He's willing to take on the most difficult jobs. It'll take a special man to unclog your pipes. They'll have to go deeper. And no one is willing to go deeper than him... ladies."
];

function summarize() {
  //check if user's budget is at least $25
  var budget = document.getElementById("budget").value.trim();
  
  
  
  //str holds the output
  var str = "";
  
  if(budget < 25) {
      str = "We don't accept projects that are less than $25";
  } else {
      //First part of result; The person's contact info.
      str = "Thank you for choosing Hands for Hire, "
          + document.getElementById("firstname").value.trim() + " "
          + document.getElementById("lastname").value.trim()
          + ".<br />You will be contacted at "
          + document.getElementById("phonenumber").value.trim()
          + ", and an employee will be sent to the following address to provide this service:<br />"
          + document.getElementById("job").value.trim() + "<br />" + "<br />"
          + "At your address:" + "<br />"
          + document.getElementById("address1").value.trim() + "<br />";


        //Find address pt. 2
      var field = document.getElementById("address2").value;
      if (field !== null && field.trim !== "") {
          str += field + "<br />";
      }
      
    
    //Project info.
      str += document.getElementById("city").value.trim() + ", " + document.getElementById("state").value.trim() + " " + document.getElementById("zipcode").value.trim() + "<br /><br />";
      str += "Your budget: $" + budget + "<br />";

      str += "Your project will be completed by: " + document.getElementById("completiondate").value + "<br />";



      str += "Urgency: ";
      var checkboxes = document.getElementsByName("urgency");
      for (var i = 0; i < checkboxes.length; ++i) {
          if(checkboxes[i].checked) {
              selected = checkboxes[i].value;
          }
      }
            str += selected + "<br />" + "<br />";

    //Overall color. This is EXTREMELY IMPORTANT TO THE CUSTOMER!!!
    
      str += "The employee will have overalls of the following color: "
           + document.getElementById("coloroveralls").value + "<br />";

    //Selects a random worker
      var personChosen = parseInt(workerNames.length*Math.random(), 10);
    
    //Outputs the plumber's info
      str += "<br />"
      + "<article class=\"workerprofile\">"
      + "<h3>Your worker is...</h3>"
      + "<h4>" + workerNames[personChosen] + "</h4>"
      + "<img src=\"" + imageUrls[personChosen] + "\">"
      + "<p>" + workerDesc[personChosen] + "</p>"
      + "</section>";
    
      //If the person was JOHN CENA, then play the theme
      if(personChosen == 1) {
          var audio = new Audio('audio/johncenatheme.mp3');
          audio.play();
      }
  }
  
  //Display the info.
  document.getElementById("summary").innerHTML = str;
  document.getElementById("summary_wrapper").style.display = "block";

}

function reset_form() {
    document.getElementById("summary").innerHTML = "";
    document.getElementById("summary_wrapper").style.display = "none";
}