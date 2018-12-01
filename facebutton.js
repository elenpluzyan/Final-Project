function populateHair(s1,s2){
	var s1 = document.getElementById(s1);
	    s2 = document.getElementById(s2);
		s1.innerHTML = "Hair";
	if(s1.value =="Hair"){
		var optionArray = ["|","short|Short","medium|Medium","long|Long"]
	} else{
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