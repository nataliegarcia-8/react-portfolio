import React from "react";
import Container from "../components/container";
import background from "../components/image/pexels-john-petalcurin-2115257.jpg"

function Home() {
	return (
		<section className="site-hero" id="section-home" style={{ backgroundImage:`url(${background})` }} data-stellar-background-ratio="0.5">
			<Container>
				<div className="row intro-text align-items-center justify-content-center">
					<div className="col-md-10 text-center pt-5">
						<h1 className="site-heading site-animate">Hello, I'm <strong className="d-block">Natalie Garcia.</strong>
						</h1>
						<strong className="d-block text-white text-uppercase letter-spacing">Full-Stack Web Developer</strong>
						<br />
						<a href="images/natalie_garcia_resume.pdf" target="_blank" className="btn btn-secondary px-4 py-2 btn-sm">Check out my Resume</a>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Home;