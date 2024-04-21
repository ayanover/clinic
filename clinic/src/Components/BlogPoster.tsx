import './ComponentStyles/BlogPoster.css'
import {Link} from "react-router-dom";

function BlogPoster() {
   
    
    return (
        <>
            <div className={'poster-container'}>
                <h2>
                    Zajrzyj też na naszego bloga!
                </h2>
                <ul>
                    <li><Link className={'poster-link'} to={'/blog/post1'}> witamina C </Link></li>
                    <li><Link className={'poster-link'} to={'/blog/post1'}> witamina D </Link></li>
                    <li><Link className={'poster-link'} to={'/blog/post1'}> witamina E </Link></li>
                </ul>
            </div>
        </>
    )
}

export default BlogPoster