import React from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'


export default function LandingPage(){

    return(
        <div className='landing'>
                <img className="pokeTit" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"  alt="error"></img>
            <Link to = '/home'>
                <img className="pokeball"src = "http://static.tumblr.com/2915b6e450d184876bf6d123c610e8e5/z8ws22r/ES4nyeiuw/tumblr_static_b1if4b5qve0ogko0ssoggkow8.gif" alt="error"></img>
            </Link>
                <img className="pikachu" src = "https://c.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif"  alt="error"></img>
        </div>
    )

}