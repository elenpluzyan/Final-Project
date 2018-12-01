function populateModel(s1,s2){
	 s1 = document.getElementById(s1);
	 s2 = document.getElementById(s2);
	s2.innerHTML = "";
	if(s1.value == "Body"){
		const optionArray = ["|","3dmodel|3D Human","robot|Robot","abstract|Abstract Human"];
	} 
	for(const option in optionArray){
		const pair = optionArray[option].split("|");
		const newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
}