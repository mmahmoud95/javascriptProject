var select = document.getElementById("select");
var data = document.getElementById("data");
var id = document.getElementById("id");
var email = document.getElementById("email");
var avatarImg = document.getElementById("img");

// var fullName;
var dataStudent;
// get all data
var option;
function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var ResponseData = xhr.response;
            var ojectData = JSON.parse(ResponseData);
            // console.log(ojectData);

            dataStudent = ojectData.data;
            // console.log(dataStudent);

            for (var i in dataStudent) {
                option = document.createElement("option");
                option.innerText =
                    dataStudent[i].first_name + " " + dataStudent[i].last_name;
                    select.appendChild(option);
                // option.setAttribute("selected", "true");
            }
        }
    };
    xhr.send();
}
getData();
function selected() {
    // var value = select.options[select.selectedIndex].value;
    var value = select.options[select.selectedIndex].value;
    
    for (i = 0; i < dataStudent.length; i++) {
        if (
            value ===
            dataStudent[i].first_name + " " + dataStudent[i].last_name
        ) {
            id.innerHTML = "<strong>ID: </strong>" + dataStudent[i].id;
            email.innerHTML = "<strong>Email: </strong>" + dataStudent[i].email;
            avatarImg.setAttribute("src", `${dataStudent[i].avatar}`);
        }
    }
}
