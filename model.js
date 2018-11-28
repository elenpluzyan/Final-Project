function populateModel(s1,s2){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	if(s1.value == "Body"){
		var optionArray = ["|","3dmodel|3D Human","robot|Robot","abstract|Abstract Human"];
	} else if(s1.value == "Face"){
		var optionArray = ["|","dark|Dark Skinned","fair|Fair Skinned"];
	} else if(s1.value =="Hair"){
		var optionArray = ["|","black|Black","blonde|Blonde","brown|Brown","red|Red"]
	}
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
}