import React from 'react'
import { Link } from 'react-router-dom'


const List=()=>{
    return(
		<ul>
			<li>
				<Link to="/gallery">
					<img src="./asset/images/the-father.jpg" alt="" />
					<span>the father</span>
				</Link>
			</li>
			<li>
				<Link to="/gallery">
					<img src="./asset/images/the-actor.jpg" alt="" />
					<span>the actor</span>
				</Link>
			</li>
			<li>
				<Link to="/gallery">
					<img src="./asset/images/the-nerd.jpg" alt="" />
					<span>the nerd</span>
				</Link>
			</li>
		</ul>
    )
}

export default List