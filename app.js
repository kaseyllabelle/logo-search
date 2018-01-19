String.prototype.colorize = function(){
	return this.replace('.png', '-color.png');
}

$('form').submit(function(e){
	e.preventDefault();

	let programType = $('.program-type').val();
	let educationLevel = $('.education-level').val();

	$('img').each(function(){
		$(this).attr('src', $(this).attr('src').replace('-color', ''));
	})

	$('img').each(function(){

		let dataField = $(this).attr('data-field');
		let dataLevel = $(this).attr('data-level');
		let grayscale = $(this).attr('src');

		if(programType.length && educationLevel.length){
			if(dataField === programType && (dataLevel === educationLevel || educationLevel === 'search-all')){
				$(this).attr('src', grayscale.colorize());
			}
			if(programType === 'search-all' && (dataLevel === educationLevel || educationLevel === 'search-all')){
				$(this).attr('src', grayscale.colorize());
			}
		}
		else{
			if(dataField === programType || programType === 'search-all' || dataLevel === educationLevel || educationLevel === 'search-all'){
				$(this).attr('src', grayscale.colorize());
			}
		}
	})
});