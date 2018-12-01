function showDiv() {
 document.getElementById('div2').style.display = 'block';
   return false;
        }

const Model = getElementById('shape-select');

const Hair = getElementById('selectlength');
const HairColor = getElementById('selectcolor1');

const Item = getElementById('selctitem');
const ItemColor = getElementById('selectcolor2');



const ChooseAModel = function(option){
	if(Model.value === '3D Human') {
	  $('#Robot').hide();
	  $('#AbstractHuman').hide(); 	
	}else if (Model.value === "Robot"){
	  $('#3DHuman').hide();
	  $('#AbstractHuman').hide();
		
	}else (Model.value === "Abstract Human"){
	  $('#Robot').hide();
	  $('#3DHuman').hide();
	}
};


const ChooseAHairstyle = function (option){
	if(Hair.value === 'Long'){
	 $('#Medium').hide();
	 $('#Short').hide();

	}else if(Hair.value === 'Medium'){
		$('#Long').hide();
		$('#Short').hide();
	}else {
		$('#Long').hide();
		$('#Short').hide();

	}
};


const ChooseAColorForAHairstyle = function (option){
	if(HairColor.value === 'Brown'){
		$('#Red').hide();
		$('#Blonde').hide();
		$('#Black').hide();
	}else if(HairColor.value === 'Blonde'){
		$('#Red').hide();
		$('#Brown').hide();
		$('#Black').hide();
	}else if(HairColor.value === 'Red'){
		$('#Brown').hide();
		$('#Blonde').hide();
		$('#Black').hide();
	}else{
		$('#Red').hide();
		$('#Blonde').hide();
		$('#Brown').hide();
	}
};

const ChooseAnItem = function (option){
	if(Item.value === 'Top'){
		$('#Skirts').hide();
		$('#Dresses').hide();
	} else if(Item.value === 'Skirts') {
		$('#Tops').hide();
		$('#Dresses').hide();
	} else if(Item.value === 'Dresses') {
		$('#Tops').hide();
		$('#Skirts').hide();
	} else {
		$('#Tops').hide();
		$('#Skirts').hide();
		$('#Dresses').hide();
	}
};

const ChooseItemColor = function(option) {
	if(ItemColor.value === 'Pink'){
		$('#Red').hide();
		$('#White').hide();
		$('#DarkBlue').hide();
		$('#Black').hide();
	    $('#LightPink').hide();
	    $('#Peach').hide();
	    $('#Yellow').hide();
   } else if(ItemColor.value === 'Red') {
   	    $('#Pink').hide();
		$('#White').hide();
		$('#DarkBlue').hide();
		$('#Black').hide();
	    $('#LightPink').hide();
	    $('#Peach').hide();
	    $('#Yellow').hide();
		
	} else if(ItemColor.value === 'White') {
		$('#Red').hide();
		$('#Pink').hide
		$('#DarkBlue').hide();
		$('#Black').hide();
	    $('#LightPink').hide();
	    $('#Peach').hide();
	    $('#Yellow').hide();
	} else if(ItemColor.value === 'DarkBlue'){
		$('#Red').hide();
		$('#Pink').hide();
		$('#White').hide();
		$('#Black').hide();
	    $('#LightPink').hide();
	    $('#Peach').hide();
	    $('#Yellow').hide();
		
	} else if(ItemColor.value === 'Black'){
		$('#Red').hide();
		$('#Pink').hide
		$('#DarkBlue').hide();
		$('#White').hide();
	    $('#LightPink').hide();
	    $('#Peach').hide();
	    $('#Yellow').hide();
	} else if(ItemColor.value === 'LightPink'){
		$('#Red').hide();
		$('#Pink').hide();
		$('#DarkBlue').hide();
		$('#Black').hide();
	    $('#White').hide();
	    $('#Peach').hide();
	    $('#Yellow').hide();
	} else if(Item.color.value === 'Peach'){
		$('#Red').hide();
		$('#Pink').hide();
		$('#DarkBlue').hide();
		$('#Black').hide();
	    $('#LightPink').hide();
	    $('#White').hide();
	    $('#Yellow').hide();
	} else if(ItemColor.value === 'Yellow'){
		$('#Red').hide();
		$('#Pink').hide();
		$('#DarkBlue').hide();
		$('#Black').hide();
	    $('#LightPink').hide();
	    $('#Peach').hide();s
	    $('#White').hide();
	}

};





