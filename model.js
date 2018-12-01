function populateModel(s1,s2){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	s2.disabled = false;
	if(s1.value == ""){
		s2.disabled = true;
	}else if(s1.value == "Body"){
		var optionArray = ["|","3dmodel|3D Human","robot|Robot","abstract|Abstract Human"];
	} 
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
}