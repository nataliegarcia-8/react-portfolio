import React from "react";
import ProjectCard from './components/ProjectCard'
import projects from './projects';
import Section from "../../components/section";
import Container from "../../components/container";


function Portfolio() {
    return (
        // <section className="site-section" id="section-portfolio">
        <Section>
           <Container>
                <div className="row">
                    <div className="section-heading text-center col-md-12">
                        <h2>My<strong>Portfolio</strong></h2>
                    </div>
                </div>
                <div className="filters">
                    <ul>
                        <li className="active" data-filter="*">All</li>
                        <li data-filter=".projects">Projects</li>
                        <li data-filter=".related">Related Experience</li>
                    </ul>
                </div>

                <div className="filters-content">
                    <div className="row grid">


                        {projects.map((p, i) => <ProjectCard key={i + '-project'} {...p} />)}
                    </div>
                </div>
                </Container>
                </Section>
    )
};



export default Portfolio;