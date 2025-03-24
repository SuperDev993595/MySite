import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jaylen Cooper </span> from <span className="purple">Virginia, USA.</span>
            <br/>
            My goal is to use technology to create real, positive impact—building solutions that are efficient, scalable, and truly improve lives. 
            I believe in continuous growth: always learning, staying curious, and evolving both as a developer and as a person. 
            I'm passionate about emerging technologies, but even more committed to using them responsibly. 
            I strive to support others, share knowledge, and leave every project, team, and environment better than I found it.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open Source Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Aim to create solutions that have a lasting impact."{" "}
          </p>
          <footer className="blockquote-footer">Jaylen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
