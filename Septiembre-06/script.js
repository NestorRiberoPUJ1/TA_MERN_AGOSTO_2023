
var joinBtn = document.getElementById("joinBtn");


joinBtn.addEventListener("click", () => {
    joinBtn.classList.add("hide");
});


function search() {
    var searchText = document.getElementById("searchInput").value;
    console.log(searchText);
    //alert(`You are searching for "${searchText}"`);
    alert("Your are searching for \"" + searchText + "\"");
}

function like(element) {
    console.log(element);
    console.log(element.nextElementSibling.innerHTML);
    let current = parseInt(element.nextElementSibling.innerHTML);
    current++;
    element.nextElementSibling.innerHTML = current;
}
