

const Model = document.getElementById('shape-select');

const Hair = document.getElementById('selectlength');
const HairColor = document.getElementById('selectcolor1');

const Item = document.getElementById('selctitem');
const ItemColor = document.getElementById('selectcolor2');


/*const ChooseAModel = function(){
	//let value = Model.options[Model.selectedIndex].value;
	let text = Model.options[Model.selectedIndex].text;
	console.log(text)
	if(text == '3D Human') {
		document.getElementById("myP").style.visibility = "hidden";
	 // $('#3DHuman').show();	
	  $('#Robot').hide();
	 // $('#AbstractHuman').hide(); 	
	}else if (text == "Robot"){
	  $('#Robot').show();
	  $('#3DHuman').hide();
	  $('#AbstractHuman').hide();
		
	}else if(text == "Abstract Human"){
	  $('#AbstractHuman').show();
	  $('#Robot').hide();
	  $('#3DHuman').hide();
	}	
 
}*/



const ChooseAHairstyle = function (){
	let value = Hair.options[Hair.selectedIndex].value;
	let text = Hair.options[Hair.selectedIndex].text;
	console.log(text)
	if(text === 'long'){
	 $('#Medium').hide();
	 $('#Short').hide();

	}else if(text === 'medium'){
		$('#Long').hide();
		$('#Short').hide();
	}else if(text === 'short'){
		$('#Long').hide();
		$('#Short').hide();

	}
}


const ChooseAColorForAHairstyle = function (){
	let value = HairColor.options[HairColor.selectedIndex].value;
	let text = HairColor.options[HairColor.selectedIndex].text;
	console.log(text)
	if(text === 'brown'){
		$('#Red').hide();
		$('#Blonde').hide();
		$('#Black').hide();
	}else if(text === 'blonde'){
		$('#Red').hide();
		$('#Brown').hide();
		$('#Black').hide();
	}else if(text === 'red'){
		$('#Brown').hide();
		$('#Blonde').hide();
		$('#Black').hide();
	}else{
		$('#Red').hide();
		$('#Blonde').hide();
		$('#Brown').hide();
	}
}



const ChooseAnItem = function (option){
	let value = Item.options[Item.selectedIndex].value;
	let text = Item.options[Item.selectedIndex].text;
	console.log(text)
	if(text === 'Tops'){
		$('#Skirts').hide();
		$('#Dresses').hide();
	} else if(text === 'Skirts') {
		$('#Tops').hide();
		$('#Dresses').hide();
	} else if(text === 'Dresses') {
		$('#Tops').hide();
		$('#Skirts').hide();
	} 
}


const ChooseItemColor = function(option) {
	let value = ItemColor.options[ItemColor.selectedIndex].value;
	let text = ItemColor.options[ItemColor.selectedIndex].text;
	console.log(text)
	if(text === 'Pink'){
		// $('#Red').hide();
		// $('#White').hide();
		// $('#DarkBlue').hide();
		// $('#Black').hide();
	    // $('#LightPink').hide();
	    // $('#Peach').hide();
		// $('#Yellow').hide();
		showItem(text);
   } else if(text === 'Red') {
   	    $('#Pink').hide();
		$('#White').hide();
		$('#DarkBlue').hide();
		$('#Black').hide();
	    $('#LightPink').hide();
	    $('#Peach').hide();
	    $('#Yellow').hide();
		
	} else if(text === 'White') {
		$('#Red').hide();
		$('#Pink').hide()
		$('#DarkBlue').hide();
		$('#Black').hide();
	    $('#LightPink').hide();
	    $('#Peach').hide();
	    $('#Yellow').hide();
	} else if(text === 'DarkBlue'){
		$('#Red').hide();
		$('#Pink').hide();
		$('#White').hide();
		$('#Black').hide();
	    $('#LightPink').hide();
	    $('#Peach').hide();
	    $('#Yellow').hide();
		
	} else if(text === 'Black'){
		$('#Red').hide();
		$('#Pink').hide()
		$('#DarkBlue').hide();
		$('#White').hide();
	    $('#LightPink').hide();
	    $('#Peach').hide();
	    $('#Yellow').hide();
	} else if(text === 'LightPink'){
		$('#Red').hide();
		$('#Pink').hide();
		$('#DarkBlue').hide();
		$('#Black').hide();
	    $('#White').hide();
	    $('#Peach').hide();
	    $('#Yellow').hide();
	} else if(text === 'Peach'){
		$('#Red').hide();
		$('#Pink').hide();
		$('#DarkBlue').hide();
		$('#Black').hide();
	    $('#LightPink').hide();
	    $('#White').hide();
	    $('#Yellow').hide();
	} else if(text === 'Yellow'){
		$('#Red').hide();
		$('#Pink').hide();
		$('#DarkBlue').hide();
		$('#Black').hide();
	    $('#LightPink').hide();
	    $('#Peach').hide();s
	    $('#White').hide();
	}

}



function showDiv() {
 document.getElementById('div2').style.display = 'block';
// ChooseAModel();
ChooseAnItem();
   return false;
        }





function showItem(item){
	$(document).ready(function() {
		$('#show').click(function() {
			$(item).show();
		});
	});
}