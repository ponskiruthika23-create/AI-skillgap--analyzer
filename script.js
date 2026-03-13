if (currentPage === 5) {
  app.innerHTML += `
    <h2>Learning Path</h2>
    <p>Based on your resume, here are suggested learning paths:</p>
    <ul>
      <li>Enroll in Naan Mudhalvan EV courses</li>
      <li>Take online certifications (Coursera, Skill Council)</li>
      <li>ITI/Polytechnic modules for missing skills</li>
    </ul>

    <h3>Recommended YouTube Channels</h3>
    <p>Click to explore video tutorials:</p>
    <ul>
      <li><a href="https://www.youtube.com/@ErrorMakesClever" target="_blank">Error Makes Clever (Engineering & EV concepts)</a></li>
      <li><a href="https://www.youtube.com/@GreatScottLab" target="_blank">GreatScott! (Electronics & Power Systems)</a></li>
      <li><a href="https://www.youtube.com/@EEVblog" target="_blank">EEVblog (Electrical Engineering Basics)</a></li>
      <li><a href="https://www.youtube.com/@NPTELHRD" target="_blank">NPTEL (Indian Technical Lectures)</a></li>
    </ul>

    <button class="back" onclick="prevPage()">← Back</button>
    <button onclick="nextPage()">Next →</button>
  `;
}
