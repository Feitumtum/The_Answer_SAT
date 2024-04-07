function getAndSetVal() {
  var Sname = document.getElementById("Sname").value;
  var Lname = document.getElementById("Lname").value;
  var title = document.getElementById("title").value;
  var gender = document.getElementById("gender").value;

  var school = document.getElementById("school").value;
  var classType = document.getElementById("classType").value;
  var date = document.getElementById("date").value;
  var teacher1 = document.getElementById("teacher1").value;
  var teacher2 = document.getElementById("teacher2").value;

  // Determine pronounsgit status based on student gender
  if (gender == "Female") {
    var Ugender1 = "She";
    var Lgender1 = "she";
    var gender2 = "her";
  } else if (gender == "Male") {
    var Ugender1 = "He";
    var Lgender1 = "he";
    var gender2 = "his";
  } else {
    var Ugender1 = "They";
    var Lgender1 = "they";
    var gender2 = "their";
  }

  // if statements to determine intro ending based on the type of class
  var class_location;
  if (classType == "virtual") {
    class_location = `recently attended on ${date}`;
  } else {
    class_location = `recently attended on ${date} at ${school}`;
  }

  fetch(
    "https://raw.githubusercontent.com/Feitumtum/The_Answer_SAT/Add-New-Templates/DigitalSATTemplate.txt"
  )
    .then((response) => response.text())
    .then((data) => {
      alert("Changed Applied!");

      // Exchange the variables
      data = data.replace(/{Sname}/g, Sname);
      data = data.replace(/{Lname}/g, Lname);
      data = data.replace(/{title}/g, title);
      data = data.replace(/{Ugender1}/g, Ugender1);
      data = data.replace(/{Lgender1}/g, Lgender1);
      data = data.replace(/{gender2}/g, gender2);
      data = data.replace(/{teacher1}/g, teacher1);
      data = data.replace(/{teacher2}/g, teacher2);
      data = data.replace(/{recently attended}/g, class_location);

      // Retain paragraph structure
      formattedData = data.replace(/\n/g, "<br>");

      // Make Paragraph headings bold
      bold_sub_headings = formattedData.replace(
        /(Let’s Be Friends on Socials!|The Answer Class Affordable College Admissions Support)/g,
        "<strong>$1</strong>"
      );

      // Adding Hyperlinks
      hyperlinked_text = bold_sub_headings.replace(
        "College Admissions Crash Courses",
        '<a href="https://theanswerclass.com/college-admissions-crash-course-for-students/">College Admissions Crash Courses</a>'
      );
      hyperlinked_text = hyperlinked_text.replace(
        "College Essay Writing Workshops",
        '<a href="https://theanswerclass.com/college-application-personal-essay-writing-workshops/">College Essay Writing Workshops</a>'
      );
      hyperlinked_text = hyperlinked_text.replace(
        "Personalized College List Service",
        '<a href="https://theanswerclass.com/personalized-college-list-service/">Personalized College List Service</a>'
      );
      hyperlinked_text = hyperlinked_text.replace(
        "1:1 College Admissions Support for Parents",
        '<a href="https://theanswerclass.com/college-admissions-crash-courses-and-11-college-application-support/#one-one-college-support-parents">1:1 College Admissions Support for Parents</a>'
      );
      hyperlinked_text = hyperlinked_text.replace(
        "1:1 College Application & Accountability Support for Students",
        '<a href="https://theanswerclass.com/college-admissions-crash-courses-and-11-college-application-support/#one-one-college-application-for-students">1:1 College Application & Accountability Support for Students</a>'
      );
      hyperlinked_text = hyperlinked_text.replace(
        "premium bundle",
        '<a href="https://theanswerclass.com/answer-satact-combo-package/">premium bundle</a>'
      );
      hyperlinked_text = hyperlinked_text.replace(
        "Facebook",
        '<a href="https://www.facebook.com/theanswerclass/?ref=hl">Facebook</a>'
      );
      hyperlinked_text = hyperlinked_text.replace(
        "Instagram",
        '<a href="https://www.instagram.com/theanswerclass/">Facebook</a>'
      );

      // Display the text onto the website
      document.getElementById("OUTPUT").innerHTML = hyperlinked_text;
      document
        .getElementById("OUTPUT")
        .appendChild(document.getElementById("logo"));
    })
    .catch((error) => console.error("Error fetching file:", error));
}

function copyText() {
  var r = document.createRange();
  r.selectNode(document.getElementById("AllOutput"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert(" Copied to Clipboard, use Ctrl + V to paste");
}

function validateForm() {
  var variables = document.forms["myForm"]["fname"].value;
  for (let i = 0; i < variables.length; i++) {
    if (variables[i] === "") {
      alert("Missing Inputs");
      return false;
    }
  }
}
