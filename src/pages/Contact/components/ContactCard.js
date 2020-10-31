import React from "react";

function ContactCard(props){
return <div className="col-md-4 mb-3 mb-md-0">
<div className="card py-4 h-100">
   <div className="card-body text-center">
      <span className={props.icon}></span>
      <h4 className="contact">{props.title}</h4>
      <hr className="my-4" />
      <a href={props.link}>{props.touch}</a>
   </div>
</div>
</div>
}

export default ContactCard;