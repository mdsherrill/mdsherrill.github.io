import React from "react";
import "./resume.css";

function Resume() {
  return (
    <div className="resume">
      <h1 className="resume-title">Matthew Sherrill</h1>
      <p>
        Tulsa, OK | (918) 949-5988 |{" "}
        <a href="mailto:matthew@sherrillfamily.net">
          matthew@sherrillfamily.net
        </a>
      </p>
      <button className="resume-button">Download PDF</button>
      <div className="entry">
        <h2 className="section-title">Education</h2>
        <hr />
        <div className="entry">
            <div className="section-header">
                <p className="position"> University of Arkansas - Fayetteville, AR</p>
                <p className="date">August 2020 - December 2024</p>
            </div>
            <p>Bachelor of Science in Computer Science</p>
            <p>Cybersecurity Concentration, Minor in Mathematics | GPA 3.39 </p>
        </div>
      </div>
      <div className="section">
        <h2 className="section-title">Professional Experience</h2>
        <hr />
        <div className="entry">
          <div className="section-header">
            <p className="position">
              Computer Scientist Intern - Tinker AFB, OK
            </p>
            <p className="date">May 2024 - Present</p>
          </div>
          <ul>
            <li>
              Contributed to the backend framework and communication systems,
              helping secure a new contract and workload for Tinker AFB.
            </li>
            <li>
              Utilized Golang to optimize backend systems and enhance Aerial
              Networking communication efficiency.
            </li>
            <li>
              Currently working on CI/CD pipelines with GitLab (Docker),
              improving testing processes and optimizing workflow efficiency
              within the team.
            </li>
          </ul>
        </div>
        <div>
          <div className="section-header">
            <p className="position">
              College of Engineering Lead Mentor - University of Arkansas,
              Fayetteville, AR
            </p>
            <p className="date">March 2023 - December 2025</p>
          </div>
          <ul>
            <li> Supervised and managed 8 Peer Mentors, overseeing their work with 80+ mentees and addressing performance and program-related issues. </li>
            <li> Directed curriculum updates based on feedback, aligning mentoring practices with program goals. </li>
            <li> Coordinated staff communications, managed schedules and payroll, and ensured a supportive work environment for Peer Mentors. </li>
          </ul>
        </div>
        <div>
            <div className="section-header">
                <p className="position">College of Engineering Peer Mentor - University of Arkansas,
                Fayetteville, AR</p>
                <p className="date">March 2021 - March 2023</p>
            </div>
            <ul>
                <li> Assigned an average of 10-12 incoming first-year students with whom meet individually.</li>
                <li> Referred first-year students to appropriate campus resources, provide a mature and ethical viewpoint, assist with problems or issues. </li>
                <li> Served as a guide to ensure success, provide accurate information, and help students have a positive outlook on their journey to earning their degree.</li>
            </ul>
        </div>
      </div>
      <div className="section">
        <h2>Projects</h2>
        <hr />
        <div className="entry">
            <div className="section-header">
                <p className="position">Multi-Stage Rocket Controller</p>
                <p className="date">August 2022 - December 2024</p>
            </div>
            <ul>
                <li> Led the development of a cross-platform application using Electron and React for real-time telemetry visualization, 3D rocket modeling, and interactive graphs.</li>
                <li> Integrating data from custom hardware aboard the rocket via radio frequency, with in-flight data monitoring and replay capabilities.</li>
                <li> Ensured real-time telemetry data synchronization, optimizing performance for minimal delay during rocket flight.</li>
            </ul>
        </div>
        <div className="entry">
            <div className="section-header">
                <p className="position">HomeGym - Association of Computing Machinery HogHacks</p>
                <p className="date">April 2024</p>
            </div>
            <ul>
                <li>Led a team in developing an application in 24 hours aimed to match users with a personalized home gym.</li>
                <li>Utilized React for designing the user interface and Firebase for authentication and storage of user information.</li>
                <li>•	Achieved 4th place out of 30+ presenting teams and 170+ total participants</li>
            </ul>
        </div>
        <div className="entry">
            <div className="section-header">
                <p className="position">Personal Portfolio</p>
                <p className="date">Current</p>
            </div>
            <ul>
                <li>Developed and released a custom plugin for Obsidian, available on the plugin store, to integrate dynamic wiki functionality for easier navigation and content access using TypeScript and React.</li>
                <li>Built interactive components with React, including customizable settings for a personalized wiki experience.</li>
            </ul>
        </div>
      </div>
      <div className="section">
        <h2>Skills Summary</h2>
        <hr />
        <p>
          Programming Languages: Golang, Java, JavaScript, TypeScript, Python, C++, C#, MySQL
        </p>
        <p>Technologies: Kubernetes (K8/K3), Docker, GitLab, Grafana, Prometheus, React, Vite, Electron</p>
        <p>Security Clearances: Secret (Pending, May)</p>
      </div>
    </div>
  );
}

export default Resume;
