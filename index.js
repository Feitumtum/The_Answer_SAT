function getAndSetVal() {
  // get which template was chosen
  var templateOption = document.querySelector('input[name="template"]:checked');
  var errorMsg = document.getElementById("error-msg");

  if (templateOption) {
    var templateValue = templateOption.value;
    console.log(templateValue);
    errorMsg.textContent = ""; // Clear error message if an option is selected

    // Get the inputs from website
    var studentName = document.getElementById("studentName").value;
    var parentName = document.getElementById("parentName").value;
    var gender = document.getElementById("gender").value;

    var school = document.getElementById("school").value;
    var classType = document.getElementById("classType").value;
    var date = document.getElementById("date").value;
    var teacher1 = document.getElementById("teacher1").value;
    var teacher2 = document.getElementById("teacher2").value;

    // Determine pronouns based on student gender
    if (gender == "Male") {
      var He_She_They = "He";
      var he_she_they = "he";
      var his_her_their = "his";
      var him_her_them = "him";
    } else if (gender == "Female") {
      var He_She_They = "She";
      var he_she_they = "she";
      var his_her_their = "her";
      var him_her_them = "her";
    } else {
      var He_She_They = "They";
      var he_she_they = "they";
      var his_her_their = "their";
      var him_her_them = "them";
    }

    // if statements to determine intro ending based on if the class was virtual or in person
    var class_location;
    if (classType == "virtual") {
      class_location = `recently attended on ${date}`;
    } else {
      class_location = `recently attended on ${date} at ${school}`;
    }

    // determine which after class email template to use
    if (templateValue == "SAT") {
      templateURL =
        "https://raw.githubusercontent.com/Feitumtum/The_Answer_SAT/Add-New-Templates/DigitalSATTemplate.txt";
    } else if (templateValue == "CollegeEssay") {
      templateURL =
        "https://raw.githubusercontent.com/Feitumtum/The_Answer_SAT/Add-New-Templates/CollegeEssayTemplate.txt";
    } else if (templateValue == "ACT") {
      templateURL =
        "https://raw.githubusercontent.com/Feitumtum/The_Answer_SAT/Add-New-Templates/ACTTemplate.txt";
    }

    // function to fetch and fill the template --> and then post on website
    fill_in_template(
      studentName,
      parentName,
      He_She_They,
      he_she_they,
      his_her_their,
      him_her_them,
      teacher1,
      teacher2,
      class_location,
      templateURL
    );
  } else {
    errorMsg.textContent = "Please select a template option."; // Display an error message if no template was chosen
  }
}

// Function that takes in inputs and replaces the placeholders in the template
function fill_in_template(
  studentName,
  parentName,
  He_She_They,
  he_she_they,
  his_her_their,
  him_her_them,
  teacher1,
  teacher2,
  class_location,
  templateURL
) {
  fetch(templateURL)
    .then((response) => response.text())
    .then((data) => {
      // Exchange the basic variables
      data = replacePlaceholders(
        data,
        studentName,
        parentName,
        He_She_They,
        he_she_they,
        his_her_their,
        him_her_them,
        teacher1,
        teacher2,
        class_location
      );

      var formattedData = data.replace(/\n/g, "<br>"); // Retain paragraph structure
      var bulletPoints = addBulletPoints(formattedData); // Add bullet points
      var bold_sub_headings = formatHeadings(bulletPoints); // Make Paragraph headings bold
      var hyperlinked_text = addHyperlinks(bold_sub_headings); // Adding Hyperlinks

      // Display the text onto the website
      document.getElementById("OUTPUT").innerHTML = hyperlinked_text;
      document.getElementById("OUTPUT");
      highlightPlaceholders(); // Highlight replaced placeholders
    })
    .catch((error) => console.error("Error fetching file:", error));
}

// Function that replaces text in the templates with the input variables
function replacePlaceholders(
  data,
  studentName,
  parentName,
  He_She_They,
  he_she_they,
  his_her_their,
  him_her_them,
  teacher1,
  teacher2,
  class_location
) {
  return data
    .replace(
      /{studentName}/g,
      `<span class="placeholder">${studentName}</span>`
    )
    .replace(/{parentName}/g, `<span class="placeholder">${parentName}</span>`)
    .replace(
      /{He_She_They}/g,
      `<span class="placeholder">${He_She_They}</span>`
    )
    .replace(
      /{he_she_they}/g,
      `<span class="placeholder">${he_she_they}</span>`
    )
    .replace(
      /{his_her_their}/g,
      `<span class="placeholder">${his_her_their}</span>`
    )
    .replace(
      /{him_her_them}/g,
      `<span class="placeholder">${him_her_them}</span>`
    )
    .replace(/{teacher1}/g, `<span class="placeholder">${teacher1}</span>`)
    .replace(/{teacher2}/g, `<span class="placeholder">${teacher2}</span>`)
    .replace(
      /{recently attended}/g,
      `<span class="placeholder">${class_location}</span>`
    );
}

// Function that makes the paragraph headings bold
function formatHeadings(data) {
  return data.replace(
    /(Let’s Be Friends on Socials!|The Answer Class Affordable College Admissions Support)/g,
    "<strong>$1</strong>"
  );
}

// Function that changes texts to hyperlinks
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
      '<a href="https://www.instagram.com/theanswerclass/">Instagram</a>'
    );
}

// Function that replaces the bulletpoint placeholders and formats into html list
function addBulletPoints(data) {
  var bulletPoints = data.match("{bulletPoint}"); // Get all occurrences of {bulletPoint}

  if (bulletPoints) {
    data = data.replace("{FirstBulletPoint}", "<ul> <li>");
    data = data.replace(/\{bulletPoint\}/g, "<li>");
    data = data.replace("{bulletPointsEnd}", "</ul>");
    return data;
  } else {
    return data;
  }
}

// Function that highlights the text that changes when the user submits
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
  }, 3000); // Adjust the delay as needed
}

function copyText() {
  var r = document.createRange();
  r.selectNode(document.getElementById("AllOutput"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  // Show copy message
  var copyMessage = document.getElementById("copyMessage");
  copyMessage.textContent = "Copied to Clipboard, use Ctrl + V to paste";
  copyMessage.style.display = "block";

  // Hide message after 2 seconds
  setTimeout(function () {
    copyMessage.style.display = "none";
  }, 3000);
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
