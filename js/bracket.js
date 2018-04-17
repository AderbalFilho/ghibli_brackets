var empty = '<div class="pd-top-60"></div>';
$(".round-1-1").click(function () {
	var htmlString = $( this ).html();
	var rd21 = $("#round-2-1").html();
	var rd31 = $("#round-3-1").html();
	var rd41 = $("#round-4-1").html();
	var rd51 = $("#round-5-1").html();
	if( (rd21 == rd31) && (rd21 == rd41) && (rd21 == rd51) && (rd21 != empty) ) {
		$("#round-3-1").html(htmlString);
		$("#round-4-1").html(htmlString);
		$("#round-5-1").html(htmlString);
	} else if ( (rd21 == rd31) && (rd21 == rd41) && (rd21 != empty) ) {
		$("#round-3-1").html(htmlString);
		$("#round-4-1").html(htmlString);
	} else if ( (rd21 == rd31) && (rd21 != empty) ) {
		$("#round-3-1").html(htmlString);
	}
	$("#round-2-1").html(htmlString);
});
$(".round-1-2").click(function () {
	var htmlString = $( this ).html();
	var rd22 = $("#round-2-2").html();
	var rd31 = $("#round-3-1").html();
	var rd41 = $("#round-4-1").html();
	var rd51 = $("#round-5-1").html();
	if( (rd22 == rd31) && (rd22 == rd41) && (rd22 == rd51) && (rd22 != empty) ) {
		$("#round-3-1").html(htmlString);
		$("#round-4-1").html(htmlString);
		$("#round-5-1").html(htmlString);
	} else if ( (rd22 == rd31) && (rd22 == rd41) && (rd22 != empty) ) {
		$("#round-3-1").html(htmlString);
		$("#round-4-1").html(htmlString);
	} else if ( (rd22 == rd31) && (rd22 != empty) ) {
		$("#round-3-1").html(htmlString);
	}
	$("#round-2-2").html(htmlString);
});
$(".round-1-3").click(function () {
	var htmlString = $( this ).html();
	var rd23 = $("#round-2-3").html();
	var rd32 = $("#round-3-2").html();
	var rd41 = $("#round-4-1").html();
	var rd51 = $("#round-5-1").html();
	if( (rd23 == rd32) && (rd23 == rd41) && (rd23 == rd51) && (rd23 != empty) ) {
		$("#round-3-2").html(htmlString);
		$("#round-4-1").html(htmlString);
		$("#round-5-1").html(htmlString);
	} else if( (rd23 == rd32) && (rd23 == rd41) && (rd23 != empty) ) {
		$("#round-3-2").html(htmlString);
		$("#round-4-1").html(htmlString);
	} else if ( (rd23 == rd32) && (rd23 != empty) ) {
		$("#round-3-2").html(htmlString);
	}
	$("#round-2-3").html(htmlString);
});
$(".round-1-4").click(function () {
	var htmlString = $( this ).html();
	var rd24 = $("#round-2-4").html();
	var rd32 = $("#round-3-2").html();
	var rd41 = $("#round-4-1").html();
	var rd51 = $("#round-5-1").html();
	if( (rd24 == rd32) && (rd24 == rd41) && (rd24 == rd51) && (rd24 != empty) ) {
		$("#round-3-2").html(htmlString);
		$("#round-4-1").html(htmlString);
		$("#round-5-1").html(htmlString);
	} else if( (rd24 == rd32) && (rd24 == rd41) && (rd24 != empty) ) {
		$("#round-3-2").html(htmlString);
		$("#round-4-1").html(htmlString);
	} else if ( (rd24 == rd32) && (rd24 != empty) ) {
		$("#round-3-2").html(htmlString);
	}
	$("#round-2-4").html(htmlString);
});
$(".round-1-5").click(function () {
	var htmlString = $( this ).html();
	var rd25 = $("#round-2-5").html();
	var rd33 = $("#round-3-3").html();
	var rd42 = $("#round-4-2").html();
	var rd51 = $("#round-5-1").html();
	if( (rd25 == rd33) && (rd25 == rd42) && (rd25 == rd51) && (rd25 != empty) ) {
		$("#round-3-3").html(htmlString);
		$("#round-4-2").html(htmlString);
		$("#round-5-1").html(htmlString);
	} else if( (rd25 == rd33) && (rd25 == rd42) && (rd25 != empty) ) {
		$("#round-3-3").html(htmlString);
		$("#round-4-2").html(htmlString);
	} else if ( (rd25 == rd33) && (rd25 != empty) ) {
		$("#round-3-3").html(htmlString);
	}
	$("#round-2-5").html(htmlString);
});
$(".round-1-6").click(function () {
	var htmlString = $( this ).html();
	var rd26 = $("#round-2-6").html();
	var rd33 = $("#round-3-3").html();
	var rd42 = $("#round-4-2").html();
	var rd51 = $("#round-5-1").html();
	if( (rd26 == rd33) && (rd26 == rd42) && (rd26 == rd51) && (rd26 != empty) ) {
		$("#round-3-3").html(htmlString);
		$("#round-4-2").html(htmlString);
		$("#round-5-1").html(htmlString);
	} else if( (rd26 == rd33) && (rd26 == rd42) && (rd26 != empty) ) {
		$("#round-3-3").html(htmlString);
		$("#round-4-2").html(htmlString);
	} else if ( (rd26 == rd33) && (rd26 != empty) ) {
		$("#round-3-3").html(htmlString);
	}
	$("#round-2-6").html(htmlString);
});
$(".round-1-7").click(function () {
	var htmlString = $( this ).html();
	var rd27 = $("#round-2-7").html();
	var rd34 = $("#round-3-4").html();
	var rd42 = $("#round-4-2").html();
	var rd51 = $("#round-5-1").html();
	if( (rd27 == rd34) && (rd27 == rd42) && (rd27 == rd51) && (rd27 != empty) ) {
		$("#round-3-4").html(htmlString);
		$("#round-4-2").html(htmlString);
		$("#round-5-1").html(htmlString);
	} else if( (rd27 == rd34) && (rd27 == rd42) && (rd27 != empty) ) {
		$("#round-3-4").html(htmlString);
		$("#round-4-2").html(htmlString);
	} else if ( (rd27 == rd34) && (rd27 != empty) ) {
		$("#round-3-4").html(htmlString);
	}
	$("#round-2-7").html(htmlString);
});
$(".round-1-8").click(function () {
	var htmlString = $( this ).html();
	var rd28 = $("#round-2-8").html();
	var rd34 = $("#round-3-4").html();
	var rd42 = $("#round-4-2").html();
	var rd51 = $("#round-5-1").html();
	if( (rd28 == rd34) && (rd28 == rd42) && (rd28 == rd51) && (rd28 != empty) ) {
		$("#round-3-4").html(htmlString);
		$("#round-4-2").html(htmlString);
		$("#round-5-1").html(htmlString);
	} else if( (rd28 == rd34) && (rd28 == rd42) && (rd28 != empty) ) {
		$("#round-3-4").html(htmlString);
		$("#round-4-2").html(htmlString);
	} else if ( (rd28 == rd34) && (rd28 != empty) ) {
		$("#round-3-4").html(htmlString);
	}
	$("#round-2-8").html(htmlString);
});
$(".round-2-1").click(function () {
	var htmlString = $( this ).html();
	var rd31 = $("#round-3-1").html();
	var rd41 = $("#round-4-1").html();
	var rd51 = $("#round-5-1").html();
	if( (rd31 == rd41) && (rd31 == rd51) && (rd31 != empty) ) {
		$("#round-4-1").html(htmlString);
		$("#round-5-1").html(htmlString);
	} else if( (rd31 == rd41) && (rd31 != empty) ) {
		$("#round-4-1").html(htmlString);
	}
	$("#round-3-1").html(htmlString);
});
$(".round-2-2").click(function () {
	var htmlString = $( this ).html();
	var rd32 = $("#round-3-2").html();
	var rd41 = $("#round-4-1").html();
	var rd51 = $("#round-5-1").html();
	if( (rd32 == rd41) && (rd32 == rd51) && (rd32 != empty) ) {
		$("#round-4-1").html(htmlString);
		$("#round-5-1").html(htmlString);
	} else if( (rd32 == rd41) && (rd32 != empty) ) {
		$("#round-4-1").html(htmlString);
	}
	$("#round-3-2").html(htmlString);
});
$(".round-2-3").click(function () {
	var htmlString = $( this ).html();
	var rd33 = $("#round-3-3").html();
	var rd42 = $("#round-4-2").html();
	var rd51 = $("#round-5-1").html();
	if( (rd33 == rd42) && (rd33 == rd51) && (rd33 != empty) ) {
		$("#round-4-2").html(htmlString);
		$("#round-5-1").html(htmlString);
	} else if( (rd33 == rd42) && (rd33 != empty) ) {
		$("#round-4-2").html(htmlString);
	}
	$("#round-3-3").html(htmlString);
});
$(".round-2-4").click(function () {
	var htmlString = $( this ).html();
	var rd34 = $("#round-3-4").html();
	var rd42 = $("#round-4-2").html();
	var rd51 = $("#round-5-1").html();
	if( (rd34 == rd42) && (rd34 == rd51) && (rd34 != empty) ) {
		$("#round-4-2").html(htmlString);
		$("#round-5-1").html(htmlString);
	} else if( (rd34 == rd42) && (rd34 != empty) ) {
		$("#round-4-2").html(htmlString);
	}
	$("#round-3-4").html(htmlString);
});
$(".round-3-1").click(function () {
	var htmlString = $( this ).html();
	var rd41 = $("#round-4-1").html();
	var rd51 = $("#round-5-1").html();
	if( (rd41 == rd51) && (rd41 != empty) ) {
		$("#round-5-1").html(htmlString);
	}
	$("#round-4-1").html(htmlString);
});
$(".round-3-2").click(function () {
	var htmlString = $( this ).html();
	var rd42 = $("#round-4-2").html();
	var rd51 = $("#round-5-1").html();
	if( (rd42 == rd51) && (rd42 != empty) ) {
		$("#round-5-1").html(htmlString);
	}
	$("#round-4-2").html(htmlString);
});
$(".round-4-1").click(function () {
	var htmlString = $( this ).html();
	$("#round-5-1").html(htmlString);
});