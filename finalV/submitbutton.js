
const Hair = document.getElementById('selectlength');
const HairColor = document.getElementById('selectcolor1');

const Item = document.getElementById('selectitem');
const ItemColor = document.getElementById('selectcolor2');

const ChooseAHairstyle = function (){
	let value = Hair.options[Hair.selectedIndex].value;
	let text = Hair.options[Hair.selectedIndex].text;
	console.log(text)
	if(text === 'Long'){
	 $('#Medium').hide();
	 $('#Short').hide();

	}else if(text === 'Medium'){
		$('#Long').hide();
		$('#Short').hide();
	}else if(text === 'Short'){
		$('#Long').hide();
		$('#Short').hide();

	}
}


const ChooseAColorForAHairstyle = function (){
	let value = HairColor.options[HairColor.selectedIndex].value;
	let text = HairColor.options[HairColor.selectedIndex].text;
	console.log(text)
	if(text === 'Brown'){
		$('#Red').hide();
		$('#Blonde').hide();
		$('#Black').hide();
	}else if(text === 'Blonde'){
		$('#Red').hide();
		$('#Brown').hide();
		$('#Black').hide();
	}else if(text === 'Red'){
		$('#Brown').hide();
		$('#Blonde').hide();
		$('#Black').hide();
	}else{
		$('#Red').hide();
		$('#Blonde').hide();
		$('#Brown').hide();
	}
}


const ChooseItemColor = function(option) {
	let value2 = ItemColor.options[ItemColor.selectedIndex].value;
	let text2 = ItemColor.options[ItemColor.selectedIndex].text;

	let value = Item.options[Item.selectedIndex].value;
	let text = Item.options[Item.selectedIndex].text;

	switch (text){
		case 'Tops':
			switch (text2){
				case 'White':
					$('#WhiteTop').show();
				break;
				case 'Red':
				    $('#RedTop').show();
                break;
                case 'Pink':
                    $('#PinkTop').show();
                break;
			}

		break;
		case 'Skirts':
			switch(text2){
				case 'DarkBlue':
					$('#DarkBlueSkirt').show();
				break;
				case 'Black':
				    $('#BlackSkirt').show();
				break;
				case 'LightPink':
				    $('#LightPinkSkirt').show();
				break;
				case 'Crimson':
				    $('CrimsonSkirt').show();
				break;
			}
		break;
		case 'Dresses':
			switch(text2){
				case 'Black':
					$('#BlackSkirt').show();
				break;
				case 'Peach':
					$('#PeachDress').show();
				break;
				case 'Yellow':
					$('#YellowDress').show();
				break;
			}
		break;

	}

}

const showDiv = function(){
	document.getElementById('div2').style.display = 'block'
	ChooseItemColor();
	return false;
}




// function showItem(item){
// 	$(document).ready(function() {
// 		$('#show').click(function() {
// 			$(item).show();
// 		});
// 	});
// }