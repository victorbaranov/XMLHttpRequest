

var xhrInquiryGit = new XMLHttpRequest();
xhrInquiryGit.open("GET", "https://api.github.com/users", true);
xhrInquiryGit.send();

xhrInquiryGit.onreadystatechange = function() {
    if (xhrInquiryGit.readyState != 4) return;
    if (xhrInquiryGit.status != 200) {
        alert(xhrInquiryGit.status + ':' + xhrInquiryGit.statusText);
    } else {
        try {
            var login = JSON.parse(xhrInquiryGit.responseText);
        } catch (e) {
            alert("incorrect answer" + e.message);
        }

        showLogin(login);
    }
}

function showLogin(login) {
    var table = document.createElement("table");

    login.forEach(function(login) {
        var line = document.createElement("tr");

        var avatar = document.createElement("img");
        avatar.src = login.avatar_url;

        var loginCell = document.createElement("td");
        loginCell.innerText = login.login;


        var avaCell = document.createElement("td");
        avaCell.innerText = "";
        avaCell.appendChild(avatar);

        var tel = document.getElementsByTagName('body')[0];
        tel.appendChild(table);

        table.appendChild(line);
        line.appendChild(avaCell);
        line.appendChild(loginCell);
    });
}
