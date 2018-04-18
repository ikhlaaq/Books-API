
//Books API
function bookSearch() {
    var search = document.getElementById("search").value
    document.getElementById("results").innerHTML = ""

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
        dataType: "json",
        success: function (data) {

            console.log(data)
            for (var i = 0; i < data.items.length; i++) {
                var newData = data.items[i].volumeInfo
                var preview = data.items[i].searchInfo.textSnippet

                document.getElementById("results").innerHTML += "<h2>" + newData.title + "</h2>" +
                    "<h3> By " + newData.authors[0] + "</h3>" + "<h3> Synopsis: " + preview + "</h3><hr>"
            }
        },
        type: "GET"
    });

}
function dropDown() {
    document.getElementById("results").style.display = 'block';
}

var x = document.getElementById("button")
x.addEventListener("click", bookSearch, false)
// activates api function search
x.addEventListener("click", dropDown, false)
// brings background into view
$('.title').addClass('animated fadeInDown');
// hides results until click event happens

