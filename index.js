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

  var subjectLine = `<p>Thank You for Sending ${Sname} to SAT Prep Class!</p>`;

  var website1 = "Khan Academy SAT prep website".link(
    "https://www.khanacademy.org/sat"
  );
  var website2 = "like us on Facebook".link(
    "https://www.facebook.com/theanswerclass/?ref=hl"
  );

  // if statments to determine gender and class type
  if (classType == "virtual") {
    var intro = `<p>Dear ${title}. ${Lname}, <p>Hope you are doing well. We just wanted to write a quick note to update you on the virtual SAT prep class that ${Sname} attended on ${date}.</p>`;
  } else {
    var intro = `<p>Dear ${title}. ${Lname}, <p>Hope you are doing well. We just wanted to write a quick note to update you on the in-person SAT prep class that ${Sname} attended on ${date} at ${school}.</p>`;
  }

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

  var middlePart = `<p>${Sname} was a pleasure to have in class. ${Ugender1} was attentive, engaged, and made the most of ${gender2} time while in class. ${Ugender1} participated, worked hard to understand the material and asked good questions. Learning about the SAT is not what most teenagers do for fun, but ${Sname} did a great job of making it worthwhile.</p>

    <p>We covered a lot in the short time we had together, and ${Sname} definitely learned the material. So we thank you for having had ${gender3} attend.</p>
    
    <p>We all know that this is a stressful time for all members of the family. Parents want their children to do their best and to get into the best college possible. Students want to do well, too, but also feel added pressure from friends, teachers, counselors, siblings, and parents. As we talked about during the class, no matter how you do on the SAT, you will still get into college and your family and friends will still love you. Knowing that, it is very important for the students to do whatever they can to be most prepared so that they are able to forget the stress and focus on the test.</p>
    
    <p>Here are a few other topics that we covered in class. While the SAT is an extremely important aspect of the college application, it is by no means the only thing that admissions officers take into account: GPA, difficulty of courses, extra-curricular activities, sports, leadership positions, work history, volunteering, character traits, the college essay, teacher and counselor recommendations, and the SAT all play a part. So while it is important to have strong SAT scores, it should not be the sole focus.</p>
    
    <p>Just as with playing an instrument, doing a sport or riding a bike, SAT scores get better with practice. No one is good the first time ${Lgender1} hits a key on a piano, shoots a basket, or gets on a two-wheeler, but with practice, everyone improves. The SAT is the same way.  You can’t study for the SAT the way you would for a History or Biology test but you can practice. Students learned everything there is to know about the SAT in our class. The best thing to do between now and the test is for students to do practice problems using the tips and strategies that we learned in class. To support your student in this effort, we recommend checking out the ${website1} which has a wealth of practice opportunities and explanations.</p>

    <p>Almost all students come to the class saying how much they dislike the SAT and how it is very stressful, difficult, terrible, and how it makes them feel stupid. The reason students feel this way is not because they aren’t smart, but because the SAT is unlike any other test they have ever taken. The length, the way it is scored, the way the questions are asked amongst many other factors are both confusing and counterintuitive--confusing even the brightest students. Students aren’t poor test-takers; they just aren’t familiar with how the test works. But having taken this course, your student is now familiar with how the SAT is different and how ${Lgender1} can use that to ${gender2} advantage.</p>
    
    <p>Finally, all students will get into a college that is right for them. There are hundreds of colleges out there that are very good and most importantly, ones that are very good for your child.</p> 
    
    <p>We thank you for the opportunity to have worked with your child. If you have any questions or if there is anything else that we can do for you, please let us know. We also invite you to like us on ${website2} where we post interesting and informative articles and tips on the college application process as well as share current class dates and local parent night sessions.</p>
    
    <br><br>
    Be well,
    <br><br>${teacher1}
    <br><br>${teacher2}
    <br><br>`;

  fetch(
    "https://raw.githubusercontent.com/Feitumtum/The_Answer_SAT/Add-New-Templates/DigitalSATTemplate.txt"
  )
    .then((response) => response.text())
    .then((data) => {
      alert("Changed Applied!");
      formattedData = data.replace(/\n/g, "<br>");
      bold_sub_headings = formattedData.replace(
        /(Let’s Be Friends on Socials!|The Answer Class Affordable College Admissions Support)/g,
        "<strong>$1</strong>"
      ); // Replace word1, word2, word3 with actual words you want to make bold
      document.getElementById("OUTPUT").innerHTML = bold_sub_headings;
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
