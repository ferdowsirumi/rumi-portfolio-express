

//to get data from other computer
var mydata;
function getData() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            mydata = JSON.parse(this.responseText);
            // mydata.sort(compare);
            populateData(mydata);
        }
    };

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhttp.send();
}

// #sorting
function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
        comparison = 1;
    } else if (nameA < nameB) {
        comparison = -1;
    }
    return comparison;
}


function sortByName() {
    mydata = mydata.sort(compare);
    populateData(mydata);

}



function populateData(mydata) {
    // var mydata = JSON.parse(data);
    var global = "";

    for (var i = 0; i < mydata.length; i++) {

        if (i == 8) {
            break;
        }
        global += '<div class="col2 fourCol" onclick="getUser(' + mydata[i].id + ') ">' +
            '<img src="images/user2.jpg" style="width:80px;height:80px;border:1px solid cyan;border-radius:20px;">' +
            '<div>' +
            '<h1>' + mydata[i].name + '</h1>' +
            '<p>' + mydata[i].address.city + '</p>' +
            '<p>' + 'Email : ' + mydata[i].email + '</p>' +
            '<p>' + 'phone : ' + mydata[i].phone +
            '</p>' +
            '</div>' +
            '</div>'
    }
    document.getElementById("userList").innerHTML = global;
}

function getUser(getAddress) {
    window.location = "user.html?id=" + getAddress;
}


