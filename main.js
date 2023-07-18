function changeBackgroundColor(){
	if (document.getElementsByTagName("body")[0].style.backgroundColor == "purple"){
		console.log("Changed to pink");
		document.getElementsByTagName("body")[0].style.backgroundColor = "pink";
	}
	else{
		if(document.getElementsByTagName("body")[0].style.backgroundColor == "pink"){
			console.log("Changed to purple");
			document.getElementsByTagName("body")[0].style.backgroundColor = "purple";
		}
	}
}


document.getElementsByTagName("body")[0].style.backgroundColor = "purple";
