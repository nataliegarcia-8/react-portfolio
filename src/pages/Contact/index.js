import React from "react";
import Section from "../../components/section";
import Container from "../../components/container";
import ContactCard from './components/ContactCard';
import contactInfo from './contact';

function Contact() {
   return (
      // <section className="site-section" id="section-contact">
      <Section>
         <Container>
            <div className="row">
               <div className="col-md-12 mb-5">
                  <div className="section-heading text-center">
                     <h2>Get <strong>In Touch</strong></h2>
                  </div>
               </div>
            </div>
            <div className="row">
            {contactInfo.map((p, i) => <ContactCard key={i + '-project'} {...p} />)}
               {/* <div className="col-md-4 mb-3 mb-md-0">
                  <div className="card py-4 h-100">
                     <div className="card-body text-center">
                        <span className="icon-github2 icon"></span>
                        <h4 className="contact"> Github</h4>
                        <hr className="my-4" />
                        <a href="https://github.com/nataliegarcia-8">https://github.com/nataliegarcia-8</a>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 mb-3 mb-md-0">
                  <div className="card py-4 h-100">
                     <div className="card-body text-center">
                        <span className="icon-email icon"></span>
                        <h4 className=" contact">Email</h4>
                        <hr className="my-4" />
                        <a href="#">gnatalie.booking@gmail.com</a>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 mb-3 mb-md-0">
                  <div className="card py-4 h-100">
                     <div className="card-body text-center">
                        <span className="icon-mobile icon"></span>
                        <h4 className=" contact">Phone</h4>
                        <hr className="my-4" />
                        <a>(404) 388-2217</a>
                     </div>
                  </div>
               </div> */}
            </div>

            </Container>
         </Section>
   )
}

export default Contact;