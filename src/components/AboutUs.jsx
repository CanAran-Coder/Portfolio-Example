function AboutUs() {
    return ( 

        <div className="container-fluid aboutUsContainer" name="aboutMe">
            <div className="row myRow">
                <div className="aboutUsImage col-6">
                    <div className="ImageContainer">
                        <img draggable={false} className="aboutUsImageItem" src="/images/avatar.jpeg"></img>
                    </div>
                    
                </div>
                <div className="aboutUsText col-6">
                    <h1 className="portfolioHeader">About Me</h1>
                    <h5 className="portfolioText">My name is Can. I've been studying on coding since fifth grade and now I'm working on full-stack web development. </h5>
                </div>

            </div>

        </div>

     );
}

export default AboutUs;