menu.onclick = function myFunction (){
	var x = document.getElementById('myTopnav')
	if (x.className === 'topnav') {
		x.className += ' responsive'
	} else {
		x.className = 'topnav'
	}
}

// або так 
// menu.onclick = () => {document.getElementById('myTopnav').classList.toggle('responsive')} 