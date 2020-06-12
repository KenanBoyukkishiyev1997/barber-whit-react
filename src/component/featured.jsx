import React from 'react'
import { Link } from 'react-router-dom'


const featured = ()=>{
return(
    <div id="featured">
			<img src="./asset/images/the-beacon.jpg" alt="" />
			<div>
				<h2>the beacon to all mankind</h2>
				<span>Our website templates are created with</span>
				<span>inspiration, checked for quality and originality</span>
				<span>and meticulously sliced and coded.</span>
				<Link to="/blog-post" class="more">read more</Link>
			</div>
		</div>
)
}

export default featured