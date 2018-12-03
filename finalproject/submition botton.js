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


const ChooseAHairstyle = function (option){
	if(HairColor.value === '')
}





