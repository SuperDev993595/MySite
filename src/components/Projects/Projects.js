import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AmalFabz"
              description="Built using Wordpress"
              demoLink="http://amalfabz.comhttp/amalfabz.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Arete Capital"
              description="Built using Shopify"
              demoLink="https://enterpriseoptimisationfund.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Artxpro"
              description="Built using react"
              demoLink="https://66c7611dd4764d00a5cdf267--dreamy-selkie-e5bca9.netlify.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Clear Stone Group"
              description="Built Using React"
              demoLink="https://www.clearstonegroup.com.au/" 
              />
          </Col>
            
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Fluencer"
              description="Built Using Nextjs"
              demoLink="https://fluencer.pk/" 
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Infiniti"
              description="Built Using Shopify"
              demoLink="https://infinitirestorations.com/" 
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Just Mac"
              description="Built Using Laravel"
              demoLink="https://justmac.com/" 
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="KreziCart"
              description="Built Using Laravel"
              demoLink="https://www.krezicart.com/" 
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Lurella"
              description="Built Using Shopify"
              demoLink="https://lurella.pk/"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Chewy"
              description="Built Using Vue"
              demoLink="https://www.chewy.com/" 
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="touragency"
              description="Built Using Vue"
              demoLink="https://www.touragencyapp.com/en/" 
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="dollskill"
              description="Payment Integration"
              demoLink="https://www.dollskill.com/" 
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="touragency"
              description="NFT market place"
              demoLink="https://www.touragencyapp.com/en/" 
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="heroku"
              description="NFT market place"
              demoLink="https://nft-exchange.herokuapp.com/" 
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="cryypto"
              description="Cryptocurrency Exchang"
              demoLink="https://ko.cryypto.com/payment" 
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
