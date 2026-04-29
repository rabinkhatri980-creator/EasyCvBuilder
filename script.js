<!DOCTYPE html>
<html>
<head>
  <title>Advanced CV Maker</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<h2>Create Your CV</h2>

<!-- 🌍 Language -->
<select id="language" onchange="changeLang()">
  <option value="en">English</option>
  <option value="hi">Hindi</option>
  <option value="ur">Urdu</option>
</select>

<div class="form">
  <input type="text" id="name" placeholder="Full Name">
  <input type="text" id="email" placeholder="Email">
  <input type="text" id="phone" placeholder="Phone">

  <textarea id="education" placeholder="Education"></textarea>
  <textarea id="experience" placeholder="Experience"></textarea>

  <button onclick="generateCV()">Generate CV</button>
  <button onclick="autoFill()">Auto Fill</button>
  <button onclick="saveCV()">Save</button>
</div>

<!-- 🎨 Drag sections -->
<div id="cv">
  <div class="section" draggable="true">
    <h2 id="cv-name"></h2>
    <p id="cv-email"></p>
    <p id="cv-phone"></p>
  </div>

  <div class="section" draggable="true">
    <h3 id="edu-title">Education</h3>
    <p id="cv-education"></p>
  </div>

  <div class="section" draggable="true">
    <h3 id="exp-title">Experience</h3>
    <p id="cv-experience"></p>
  </div>

  <button onclick="downloadPDF()">Download PDF</button>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>

<script>
// Generate CV
function generateCV() {
  cv-name.innerText = name.value;
  cv-email.innerText = email.value;
  cv-phone.innerText = phone.value;
  cv-education.innerText = education.value;
  cv-experience.innerText = experience.value;
}

// 📄 Auto Fill (AI style dummy)
function autoFill() {
  name.value = "John Doe";
  email.value = "john@email.com";
  phone.value = "123456789";
  education.value = "Bachelor in Computer Science";
  experience.value = "2 years Web Developer";
}

// 💾 Save
function saveCV() {
  const data = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    education: education.value,
    experience: experience.value
  };
  localStorage.setItem("cvData", JSON.stringify(data));
  alert("Saved!");
}

// 🌍 Language switch
function changeLang() {
  let lang = language.value;

  if (lang === "hi") {
    edu-title.innerText = "शिक्षा";
    exp-title.innerText = "अनुभव";
  } 
  else if (lang === "ur") {
    edu-title.innerText = "تعلیم";
    exp-title.innerText = "تجربہ";
  } 
  else {
    edu-title.innerText = "Education";
    exp-title.innerText = "Experience";
  }
}

// 🎨 Drag & Drop
let dragged;

document.querySelectorAll(".section").forEach(sec => {
  sec.addEventListener("dragstart", () => dragged = sec);
  sec.addEventListener("dragover", e => e.preventDefault());
  sec.addEventListener("drop", function() {
    this.parentNode.insertBefore(dragged, this);
  });
});

// PDF
function downloadPDF() {
  html2pdf().from(document.getElementById("cv")).save();
}
</script>

</body>
</html>