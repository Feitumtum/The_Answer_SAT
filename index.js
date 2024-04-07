function getAndSetVal() {
  var templateOption = document.querySelector('input[name="template"]:checked');
  var errorMsg = document.getElementById("error-msg");

  if (templateOption) {
    var templateValue = templateOption.value;
    console.log(templateValue);
    errorMsg.textContent = ""; // Clear error message if an option is selected

    var Sname = document.getElementById("Sname").value;
    var Lname = document.getElementById("Lname").value;
    var title = document.getElementById("title").value;
    var gender = document.getElementById("gender").value;

    var school = document.getElementById("school").value;
    var classType = document.getElementById("classType").value;
    var date = document.getElementById("date").value;
    var teacher1 = document.getElementById("teacher1").value;
    var teacher2 = document.getElementById("teacher2").value;

    // Determine pronouns based on student gender
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

    if (templateValue == "SAT") {
      get_SAT_Template(
        Sname,
        Lname,
        title,
        Ugender1,
        Lgender1,
        gender2,
        teacher1,
        teacher2,
        class_location
      );
    } else if (templateValue == "CollegeEssay") {
    } else if (templateValue == "ACT") {
    }
  } else {
    errorMsg.textContent = "Please select a template option."; // Display an error message
  }
}

function get_SAT_Template(
  Sname,
  Lname,
  title,
  Ugender1,
  Lgender1,
  gender2,
  teacher1,
  teacher2,
  class_location
) {
  fetch(
    "https://raw.githubusercontent.com/Feitumtum/The_Answer_SAT/Add-New-Templates/DigitalSATTemplate.txt"
  )
    .then((response) => response.text())
    .then((data) => {
      // Exchange the variables
      data = replacePlaceholders(
        data,
        Sname,
        Lname,
        title,
        Ugender1,
        Lgender1,
        gender2,
        teacher1,
        teacher2,
        class_location
      );

      var formattedData = data.replace(/\n/g, "<br>"); // Retain paragraph structure
      var bold_sub_headings = formatHeadings(formattedData); // Make Paragraph headings bold
      var hyperlinked_text = addHyperlinks(bold_sub_headings); // Adding Hyperlinks

      // Display the text onto the website
      document.getElementById("OUTPUT").innerHTML = hyperlinked_text;
      document.getElementById("OUTPUT");
      highlightPlaceholders(); // Highlight replaced placeholders
    })
    .catch((error) => console.error("Error fetching file:", error));
}

function get_College_Essay_Template(
  Sname,
  Lname,
  title,
  Ugender1,
  Lgender1,
  gender2,
  teacher1,
  teacher2,
  class_location
) {
  fetch(
    "https://raw.githubusercontent.com/Feitumtum/The_Answer_SAT/Add-New-Templates/DigitalSATTemplate.txt"
  )
    .then((response) => response.text())
    .then((data) => {
      // Exchange the variables
      data = replacePlaceholders(
        data,
        Sname,
        Lname,
        title,
        Ugender1,
        Lgender1,
        gender2,
        teacher1,
        teacher2,
        class_location
      );

      var formattedData = data.replace(/\n/g, "<br>"); // Retain paragraph structure
      var bold_sub_headings = formatHeadings(formattedData); // Make Paragraph headings bold
      var hyperlinked_text = addHyperlinks(bold_sub_headings); // Adding Hyperlinks

      // Display the text onto the website
      document.getElementById("OUTPUT").innerHTML = hyperlinked_text;
      document.getElementById("OUTPUT");
      highlightPlaceholders(); // Highlight replaced placeholders
    })
    .catch((error) => console.error("Error fetching file:", error));
}

function replacePlaceholders(
  data,
  Sname,
  Lname,
  title,
  Ugender1,
  Lgender1,
  gender2,
  teacher1,
  teacher2,
  class_location
) {
  return data
    .replace(/{Sname}/g, `<span class="placeholder">${Sname}</span>`)
    .replace(/{Lname}/g, `<span class="placeholder">${Lname}</span>`)
    .replace(/{title}/g, `<span class="placeholder">${title}</span>`)
    .replace(/{Ugender1}/g, `<span class="placeholder">${Ugender1}</span>`)
    .replace(/{Lgender1}/g, `<span class="placeholder">${Lgender1}</span>`)
    .replace(/{gender2}/g, `<span class="placeholder">${gender2}</span>`)
    .replace(/{teacher1}/g, `<span class="placeholder">${teacher1}</span>`)
    .replace(/{teacher2}/g, `<span class="placeholder">${teacher2}</span>`)
    .replace(
      /{recently attended}/g,
      `<span class="placeholder">${class_location}</span>`
    );
}

function highlightPlaceholders() {
  var placeholders = document.querySelectorAll(".placeholder");
  placeholders.forEach((placeholder) => {
    placeholder.classList.add("highlight");
  });

  // Remove highlighting after a short delay
  setTimeout(() => {
    placeholders.forEach((placeholder) => {
      placeholder.classList.remove("highlight");
    });
  }, 2000); // Adjust the delay as needed
}

function formatHeadings(data) {
  return data.replace(
    /(Let’s Be Friends on Socials!|The Answer Class Affordable College Admissions Support)/g,
    "<strong>$1</strong>"
  );
}

function addHyperlinks(data) {
  return data
    .replace(
      "College Admissions Crash Courses",
      '<a href="https://theanswerclass.com/college-admissions-crash-course-for-students/">College Admissions Crash Courses</a>'
    )
    .replace(
      "College Essay Writing Workshops",
      '<a href="https://theanswerclass.com/college-application-personal-essay-writing-workshops/">College Essay Writing Workshops</a>'
    )
    .replace(
      "Personalized College List Service",
      '<a href="https://theanswerclass.com/personalized-college-list-service/">Personalized College List Service</a>'
    )
    .replace(
      "1:1 College Admissions Support for Parents",
      '<a href="https://theanswerclass.com/college-admissions-crash-courses-and-11-college-application-support/#one-one-college-support-parents">1:1 College Admissions Support for Parents</a>'
    )
    .replace(
      "1:1 College Application & Accountability Support for Students",
      '<a href="https://theanswerclass.com/college-admissions-crash-courses-and-11-college-application-support/#one-one-college-application-for-students">1:1 College Application & Accountability Support for Students</a>'
    )
    .replace(
      "premium bundle",
      '<a href="https://theanswerclass.com/answer-satact-combo-package/">premium bundle</a>'
    )
    .replace(
      "Facebook",
      '<a href="https://www.facebook.com/theanswerclass/?ref=hl">Facebook</a>'
    )
    .replace(
      "Instagram",
      '<a href="https://www.instagram.com/theanswerclass/">Facebook</a>'
    );
}

function addBulletPoints(data) {
  var bulletPoints = data.match(/\{bulletPoint\}/g); // Get all occurrences of {bulletPoint}
  if (bulletPoints) {
    // Insert <ul> before the first occurrence
    var firstIndex = data.indexOf("{bulletPoint}");
    data = data.slice(0, firstIndex) + "<ul>" + data.slice(firstIndex);

    // Insert </ul> after the last occurrence
    var lastIndex = data.lastIndexOf("{bulletPoint}");
    data =
      data.slice(0, lastIndex + "{bulletPoint}".length) +
      "</ul>" +
      data.slice(lastIndex + "{bulletPoint}".length);

    // Replace all occurrences of {bulletPoint} with <li>
    var formattedData = data.replace(/\{bulletPoint\}/g, "<li>");
    return formattedData;
  } else {
    return data;
  }
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
