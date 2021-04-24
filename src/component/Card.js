import React from 'react';

function Card(PROPS){
    return (
        <>
            
                <div className="card-wrapper">
            
                    <div className="card profile-two">
                    
                        <div className="card-image profile-img--two">
                            <img src={PROPS.IMG} className= "cover-image" alt="profile" />
                        </div>

                        <ul className="social-icons">
                            <li>
                            <a href={PROPS.FB} target="_blank">
                                <i className="fa fa-facebook-f"></i>
                            </a>
                            </li>
                            <li>
                            <a href={PROPS.instagram} target="_blank">
                                <i className="fa fa-instagram"></i>
                            </a>
                            </li>
                            <li>
                            <a href={PROPS.twitter} target="_blank">
                                <i className="fa fa-twitter"></i>
                            </a>
                            </li>
                            <li>
                            <a href={PROPS.linkedin} target="_blank">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            </li>
                        </ul>

                        <div className="details jane">
                            <h2>{PROPS.name}
                                <br />
                                <span className="job-title">{PROPS.role}</span>
                            </h2>
                        </div>
                    </div>
                </div> 
           
        </>
    )
}

export default Card;

