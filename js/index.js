$(document).ready(function () {
	$("table tbody tr td").click(function () {
		$(this).closest("tr").parent("table");
	});

	var tr = $("table tbody tr td");
	tr.each(function () {
	});
});




