
function getData() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            populateData(this.responseText);
        }
    };

    var userId = getSelectedUser();
    console.log(userId);

    if (userId == undefined) {
        userId = 1;
    }

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users/" + userId, true);
    xhttp.send();
}

// get data id
function getSelectedUser() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');
    console.log(userId);
    return userId;
}


function populateData(data) {
    var mydata = JSON.parse(data);
    console.log(mydata);
    var global = "";

        global += '<div class="col2 fourCol">' +
            '<img src="images/user2.jpg" style="width:80px;height:80px;border:1px solid cyan;border-radius:20px;">' +
            '<div>' +
            '<h1>' + mydata.name + '</h1>' +
            '<p>' + mydata.address.city + '</p>' +
            '<p>' + 'Email : ' + mydata.email + '</p>' +
            '<p>' + 'phone : ' + mydata.phone +
            '</p>' +
            '</div>' +
            '</div>';
    
    document.getElementById("userList").innerHTML = global;
}
// getData();
