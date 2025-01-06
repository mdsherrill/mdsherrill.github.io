import React from "react";

function Resume() {
    return (
        <div>
            <h1>Matthew Sherrill</h1>
            <p>Tulsa, OK | (918) 949-5988 | <a href="mailto:matthew@sherrillfamily.net">matthew@sherrillfamily.net</a></p>
            <div className="Education">
                <h2>Education</h2>
                <p>University of Arkansas - Fayetteville, AR</p> <span>August 2020 - December 2024</span>
                <p>B.S. in Computer Science</p>
                <p>Cybersecurity Concentration, Minor in Mathematics | GPA 3.39 </p>
            </div>
            <div className="Experience">
                <h2>Professional Experience</h2>
                <div>
                    <p>Computer Scientist Intern - Tinker AFB, OK <span>May 2024- Present</span></p>
                    <ul>
                        <li>Contributed to the backend framework and communication systems, helping secure a new contract and workload for Tinker AFB.</li>
                        <li>Utilized Golang to optimize backend systems and enhance Aerial Networking communication efficiency.</li>
                        <li>Currently working on CI/CD pipelines with GitLab (Docker), improving testing processes and optimizing workflow efficiency within the team.</li>
                    </ul>
                </div>
                <div>
                College of Engineering Peer Mentor, University of Arkansas, Fayetteville, AR
                </div>
            </div>
            <div className="Projects">
            <h2>Projects</h2>
            </div>
            <div className="Leadership">
                <h2>Leadership</h2>
                <p>College of Engineering Orientation Leader, University of Arkansas</p>
                <p>Dean's List - 2020</p>
            </div>
            <div className="Skills">
                <h2>Skills Summary</h2>
                <p>Programming Languages: Golang, Python, C++, Java, JavaScript, C#, MySQL, </p>
                <p>Technologies: Git, Docker, Kubernetes, Grafana, React, Electron</p>
                <p>Security Clearances: Secret (Pending, May)</p>
            </div>
        </div>
    );
}

export default Resume;