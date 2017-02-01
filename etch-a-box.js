var grid_width = 600;

$(document).ready(function() {
	$('#container').css({'width':grid_width, 'height':grid_width});
	start_up(10);
	$('#reset').on('click',reset_grid);
	$('#color-opts').on('change',set_color);
});

function start_up(n) {
	pop_grid(n);
	$('.etch-box').on('mouseenter',{color: $('#color-opts').val()}, color_sqr);
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

function color_sqr(event) {
	var choice = event.data.color;
	if (choice ==="Rainbow") {
		$(this).css({'background-color':'#'+(Math.random()*0xFFFFFF<<0).toString(16)});
	} else {
		$(this).css({'background-color': choice});
	}
}

function reset_grid() {
	var num_rows = prompt("How many squares per row would you like?");
	$('#container').empty();
	start_up(num_rows);
}

function set_color() {
	var color = $('#color-opts').val();
	$('.etch-box').on('mouseenter',{color: color}, color_sqr);
}