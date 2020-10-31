import React from "react";
import Section from "../components/section";
import Img from "../components/image";
import Container from "../components/container";

function About() {
    return (
        // <section className="site-section" id="section-about">
        //fix id
        <Section>
           <Container>
                <div className="row mb-5 align-items-center">
                    <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                        <Img src="images/aboutme2.jpeg" classes="-image" />
                    </div>
                    <div className="col-lg-5 pl-lg-5">
                        <div className="section-heading">
                            <h2>About <strong>Me</strong></h2>
                        </div>
                        <p className="lead">Hi there! I'm Natalie Garcia. I'm a certified Full-Stack Web Developer.
					</p>
                        <p>
                            I am a recent grad with a Bachelor of Arts, a Film studies minor, and a New Media
                            Certificate from the University of Georgia. Film and television will always have my heart, but I
                            enjoy veiwing them more than I do
                            creating them.
                            I received a Full-Stack Web Development Certificate through the Georgia Institute of Technology.
					</p>
                        <p className="mb-5">
                            When I first starting coding it just made sense to me and I loved trying to fit the pieces
                            together and the feeling when you get the code to work.
                            I have never felt like I was passionate enough for the careers I was pursing until I began
                            coding.
                            I would like to pursue a career in Web Development so I can have a career I love, that
                            consistently
						challenges.</p>
                        <p>
                            <a href="images/natalie_garcia_resume.pdf" className="btn btn-secondary px-4 py-2 btn-sm">Download My Resume</a>
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default About;