let currentPage = 1;
let userName = "";
let chosenField = "";

function renderPage() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  if (currentPage === 1) {
    app.innerHTML = `
      <h2>Enter Your Name</h2>
      <input id="nameInput" placeholder="Your Name">
      <br><br>
      <button onclick="nextPage()">Next →</button>
    `;
  }

  if (currentPage === 2) {
    app.innerHTML = `
      <h2>Upload Resume</h2>
      <input type="file" id="resumeUpload">
      <br><br>
      <button class="back" onclick="prevPage()">← Back</button>
      <button onclick="nextPage()">Next →</button>
    `;
  }

  if (currentPage === 3) {
    app.innerHTML = `
      <h2>Choose Desired Field</h2>
      <button onclick="selectField('Automotive')">Automotive Manufacturing</button>
      <button onclick="selectField('EV')">EV Ecosystem</button>
      <br><br>
      <button class="back" onclick="prevPage()">← Back</button>
    `;
  }

  if (currentPage === 4) {
    let skills = "";
    if (chosenField === "Automotive") {
      skills = `
        <ul>
          <li>Battery Management</li>
          <li>Power Electronics</li>
          <li>Embedded Systems</li>
          <li>High Voltage Safety</li>
          <li>Charging Infrastructure</li>
          <li>Thermal Management</li>
          <li>IoT Connectivity</li>
          <li>AI Diagnostics</li>
          <li>Mechanical Systems</li>
          <li>Engine Technology</li>
          <li>Vehicle Diagnostics</li>
          <li>Manufacturing Processes</li>
          <li>Quality Control</li>
          <li>Sustainability Practices</li>
        </ul>
      `;
    } else {
      skills = `
        <ul>
          <li>Electrical Engineering</li>
          <li>Software Development</li>
          <li>Data Analytics</li>
          <li>Specialized Manufacturing</li>
          <li>Battery Technology</li>
          <li>Power Electronics</li>
          <li>Charging Infrastructure</li>
        </ul>
      `;
    }
    app.innerHTML = `
      <h2>Recommended Skills for ${chosenField}</h2>
      ${skills}
      <button class="back" onclick="prevPage()">← Back</button>
      <button onclick="nextPage()">Next →</button>
    `;
  }

  if (currentPage === 5) {
    app.innerHTML = `
      <h2>Learning Path</h2>
      <p>Based on your resume, here are suggested learning paths:</p>
      <ul>
        <li>Enroll in Naan Mudhalvan EV courses</li>
        <li>Take online certifications (Coursera, Skill Council)</li>
        <li>ITI/Polytechnic modules for missing skills</li>
      </ul>
      <button class="back" onclick="prevPage()">← Back</button>
      <button onclick="nextPage()">Next →</button>
    `;
  }

  if (currentPage === 6) {
    app.innerHTML = `
      <h2>Desired Companies</h2>
      <ul>
        <li>Ashok Leyland</li>
        <li>Hyundai Chennai</li>
        <li>Ola Electric Hosur</li>
        <li>TVS Motors</li>
      </ul>
      <button class="back" onclick="prevPage()">← Back</button>
    `;
  }
}

function nextPage() {
  if (currentPage === 1) {
    userName = document.getElementById("nameInput").value;
  }
  currentPage++;
  renderPage();
}

function prevPage() {
  currentPage--;
  renderPage();
}

function selectField(field) {
  chosenField = field;
  currentPage = 4;
  renderPage();
}

renderPage();
