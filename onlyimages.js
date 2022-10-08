function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
function only() {
//function onlyImages(request, sender, sendResponse) {
	var images = document.getElementsByTagName('img'); 
	
	var srcList = [];
	//var content = ''
	for(var i = 0; i < images.length; i++) {
	    srcList.push(images[i].src);
	//	content += '<img src="'+images[i].src+'"> ';
	}
	srcList = srcList.filter( onlyUnique );
	
	document.body.textContent = ''; 
	
	var sheet = document.createElement('style')
	sheet.innerHTML = "body{background: black;}	img { display: block;margin-left: auto;margin-right: auto;width: 40%; }";
	document.body.appendChild(sheet);

	let button = document.createElement('button');
	button.textContent = "This page has been eaten";
	document.body.appendChild(button);
	button.classList.add('reload-btn')
	button.onclick = ()=>{location.reload(); };
	button.innerHTML ='<svg width="30" height="30" viewBox="0 0 172 172" style="fill: #000000"><g fill="none"fill-rule="nonzero"stroke="none"stroke-width="1"stroke-linecap="butt"stroke-linejoin="miter"stroke-miterlimit="10"stroke-dasharray=""stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#1abc9c"><path d="M86,17.2c-17.01998,0 -32.66383,6.21171 -44.67969,16.48333c-1.64003,1.30561 -2.43687,3.40213 -2.07805,5.46745c0.35882,2.06532 1.81609,3.77022 3.80038,4.44616c1.98429,0.67594 4.17929,0.21517 5.72428,-1.20164c10.02307,-8.56811 22.99492,-13.72865 37.23307,-13.72865c29.79361,0 54.18567,22.57745 57.05339,51.6h-16.92005l22.93333,34.4l22.93333,-34.4h-17.49114c-2.93142,-35.25049 -32.51591,-63.06667 -68.50886,-63.06667zM22.93333,57.33333l-22.93333,34.4h17.49115c2.93142,35.25049 32.51591,63.06667 68.50885,63.06667c17.01998,0 32.66383,-6.21171 44.67969,-16.48333c1.64004,-1.30561 2.43688,-3.40213 2.07807,-5.46746c-0.35882,-2.06533 -1.81609,-3.77024 -3.80039,-4.44617c-1.9843,-0.67594 -4.1793,-0.21516 -5.72429,1.20165c-10.02308,8.56811 -22.99493,13.72864 -37.23308,13.72864c-29.79361,0 -54.18567,-22.57744 -57.05339,-51.6h16.92005z"></path></g></g> </svg>'
	button.style.cssText = "position: fixed; width: 80px; height: 80px; border-radius: 50%;margin:20px;cursor: pointer;background: transparent;background-color: transparent;background-image: none;"

	for (var a=0; a < srcList.length; a++){
		var img = document.createElement('img');
		img.src = srcList[a];
		document.body.appendChild(img);
	}

	return 1;
}
//}
//
