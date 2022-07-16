/*

to add a account/remove
servers.readFile("ggm-devaccounts.txt",(data) => {
var accounts = JSON.parse(data);
accounts.accounts["username here"] = {password:"password here"};
servers.saveFile("ggm-devaccounts.txt",
JSON.stringify(accounts),
() => {console.log("accounts data edited")});
});

 */

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('username')) {
    if (urlParams.get('password')) {
        loadingCircle.hidden = false;
        servers.readFile("ggm-devaccounts.txt", (data) => {
            var accounts = JSON.parse(data);
            loadingCircle.hidden = true;
            //console.log(accounts.accounts[urlParams.get('username')]);
            if (accounts.accounts[urlParams.get('username')]) {
                if (accounts.accounts[urlParams.get('username')].password !== urlParams.get('password')) {
                    errorMessage.hidden = false;
                    errorMessage.innerHTML = "Invalid User Info";
                } else {
                    document.getElementById("signIn").hidden = true;
                    document.getElementById("mainSetup").hidden = false;
                }
            } else {
                errorMessage.hidden = false;
                errorMessage.innerHTML = "Invalid User Info";
            }
            //console.log(accounts);
        });
    } else {
        errorMessage.hidden = false;
        errorMessage.innerHTML = "Please Provide A Password";
    }
}
commentsHTML.disabled = true;
servers.readFile("ggm-comments.txt", (data) => {
    commentsHTML.disabled = false;
    commentsHTML.innerHTML = data.split("\n").slice(1).join("\n");
});
commentsHTML.onchange = function () {
    commentsHTML.disabled = true;
    servers.saveFile("ggm-comments.txt", "\n" + commentsHTML.value, () => {
        commentsHTML.disabled = false;
    });
}

pageHTML.disabled = true;
servers.readFile("ggm-page-text.txt", (data) => {
    pageHTML.disabled = false;
    pageHTML.innerHTML = data;
});
pageHTML.onchange = function () {
    pageHTML.disabled = true;
    servers.saveFile("ggm-page-text.txt", "\n" + pageHTML.value, () => {
        pageHTML.disabled = false;
    });
}
