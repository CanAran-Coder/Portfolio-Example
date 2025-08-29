function Projects() {
    return ( 
        
        <div className="projectsContainer container-fluid" name="projects">
            <h1 className="portfolioHeader">Projects</h1>
            <div className="row gap-2">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="Project">
                        <h3 className="portfolioHeader">Can's Coffe Shop</h3>
                        <p className="portfolioText">In this project, I've learnt how backend and frontend communicate each other.I used Html, Css, Bootstrap, Javascript,MySQL, React, Node js etc.You can sign up and login, buy products with payment , get contact with live support. </p>
                        <button className="githubButton">See In Github <img className="githubIcon" src="/images/github.png"></img> </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Projects;