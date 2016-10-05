
function get_quote() {
    console.log("tu2")
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", 
        function(json) {
        console.log("tu1")
        $("#quote_msg").html("<h3>"+json[0].content + "</h3><footer>" + json[0].title + "</footer>");
    });
}

$(document).ready(function(){
    $.ajaxSetup({ cache: false });
    get_quote();
    $("#btn_get_quote").on("click", function() {
        console.log("tu");
        get_quote();
    });
})