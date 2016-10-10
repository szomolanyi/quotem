
function get_quote() {
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", 
        function(json) {
        c=jQuery(json[0].content).text();
        console.log(c);
        $("#quote_msg").html("<h3>"+c + "</h3><footer>" + json[0].title + "</footer>");
        $("#btn_tweet").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+"'"+c+"' " + json[0].title);
    });
}

$(document).ready(function(){
    $.ajaxSetup({ cache: false });
    get_quote();
    $("#btn_get_quote").on("click", get_quote);
})

