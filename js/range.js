$(function () {
    $("#slider-range-min").slider({
        range: "min",
        value: 40,
        min: 0,
        max: 100,
        slide: function (event, ui) {
            $("#amount").val(ui.value + "%");
            $("#amount2").val(100 - ui.value + "%");
        }
    });
    $("#amount").val($("#slider-range-min").slider("value") + "%");
    $("#amount2").val(100 - $("#slider-range-min").slider("value") + "%");

});