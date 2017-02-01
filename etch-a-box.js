var grid_width = 600;

$(document).ready(function() {
	$('#container').css({'width':grid_width, 'height':grid_width});
	start_up(10);
	$('#reset').on('click',reset_grid);	
});

function start_up(n) {
	pop_grid(n);
	$('.etch-box').on('mouseenter',color_sqr);
}

function pop_grid(n){
	var i,j;
	var row, cel;
	for (i=0; i < n; i++) {
		row = $("<div></div>").addClass("row");
		for (j=0; j < n; j++) {
			cel = $("<div></div>").addClass("etch-box");
			cel.css({'width':grid_width/n-2, 'height':grid_width/n-2 });
			row.append(cel);
		}
		$('#container').append(row);
	}	
}

function color_sqr() {
	$(this).addClass('etch-box-hover');
}

function reset_grid() {
	var num_rows = prompt("How many squares per row would you like?");
	$('#container').empty();
	start_up(num_rows);
}