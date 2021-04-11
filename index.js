

function UserDefinedAPI() {
    var country = document.getElementById("country").value;
    var dateOne = document.getElementById("d1").value;
    var dateTwo = document.getElementById("d2").value;
    var request = new XMLHttpRequest();
    request.open('GET', `https://api.covid19api.com/country/${country}?from=${dateOne}T00:00:00Z&to=${dateTwo}T00:00:00Z`, true)
    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {

            data.forEach((movie) => {
                myFunction(movie.Active, movie.Deaths, movie.Recovered);
            })
        } else {
            console.log('error')
        }
    }

    request.send();

}
function myFunction(active, death, recovered) {
    var para = document.createElement("P");
    para.innerText = active + " " + death + " " + recovered;
    document.body.appendChild(para);
   
}