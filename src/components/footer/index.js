import React from 'react'

const footer = (props) => {
    return <footer className="site-footer">
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-12 text-center">
                    <p>
                        <a href="https://github.com/nataliegarcia-8" className="social-item"><span className="icon-github2"></span></a>
                        <a href="https://www.linkedin.com/in/natalie-garcia-43426b162/" className="social-item"><span className="icon-linkedin2"></span></a>
                    </p>
                </div>
            </div>

            <div className="row mb-5">
                {/* <p className="col-12 text-center copy">
                    Edited by Natalie Garcia
        <br />
        Copyright &copy;
        <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is
        made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a
                        style={{ color: "#333" }} href="https://colorlib.com">Colorlib</a>
                </p> */}
            </div>
        </div>
    </footer>
}

export default footer; 