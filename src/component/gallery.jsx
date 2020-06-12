import React from 'react';
import GalleryItem from './gelery-item'



const gallery = ()=>{
    return(
        <div id="body">
		<h1><span>gallery</span></h1>
		<ul class="gallery">
			<GalleryItem src={'asset/images/mustache1.jpg'}/>
			<GalleryItem src={'asset/images/mustache2.jpg'} />
			<GalleryItem src={'asset/images/mustache3.jpg'}/>
			<GalleryItem src={'asset/images/mustache4.jpg'}/>
			<GalleryItem src={'asset/images/mustache5.jpg'}/>
			<GalleryItem src={'asset/images/mustache6.jpg'}/>
			<GalleryItem src={'asset/images/mustache7.jpg'}/>
			<GalleryItem src={'asset/images/mustache8.jpg'}/>
			<GalleryItem src={'asset/images/mustache9.jpg'}/>
		</ul>
	</div>
    )
}

export default gallery