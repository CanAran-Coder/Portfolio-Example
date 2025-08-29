function ContactMe() {
    return ( 
        <div className="contactMeContainer" name="contactMe">
            <div className="row contactMeRow">
                <h1 className="contactMeHeader p-3">Contact Me</h1>
                <h3 className="contactMeHeader iconHeader"><img draggable={false} className="contactMeIcon" src="/images/mobile.png"></img>Phone Number:+905511444270</h3>
                <h3 className="contactMeHeader iconHeader"><img draggable={false} className="contactMeIcon" src="/images/gmail.png"></img>Email:can.aran.coder@gmail.com</h3>
                <h3 className="contactMeHeader iconHeader"><img draggable={false} className="contactMeIcon" src="/images/instagram.png"></img>Instagram:can.aran_</h3>
            </div>
        </div>
     );
}

export default ContactMe;