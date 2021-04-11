

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
                myFunction(movie.Confirmed, movie.Active, movie.Deaths);
            })
        } else {
            console.log('error')
        }
    }

    request.send();

}
function myFunction(confirmed, active, death) {
    var para = document.createElement("P");
    para.innerText = confirmed + " " + active + " " + death;
    document.body.appendChild(para);
   
}