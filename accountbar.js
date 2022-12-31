var menubar = document.getElementById("main_menu");
var anoymusPNG = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAAAAXNSR0IArs4c6QAAAaVJREFUaEPtm1GOgzAMRMsFuCQ34CDcgLPuikpRK5ZsEnsmjsH9bRPlzYxNGmCa5/nn9dDPFPDh/PMUiNifPV+WRR2DbdtEc6zrKhpXGrTv+5+fXDqvgZdCXy0eKQQdHgmexEAJQIVngCMFoMEzwVECBPypsUAaXg/nj3Vr6t+188PCHwsb3X2a86mUegggjT4dPpeA0oJbRCvNldvpdYEvbTNz39cKcDv4WnBN0xvO+RZo7WZnGHgJ9C3gNeCuY28FfohmGntLcNfw0svb92XVpfMIcJfOo8BN4SX1jgR3A4+GTnVvVvMtzj8WngVuGvuaww4muDn8fwKwwYeAvxKgB/gw8NLDDu04s26vXThifMAzblognGHPEc6H8x8FIPfq2JFFzB+xj9hH7N8KRM2fG4rmaaxcc8r9p7/93r7mMIMtgkm3rwFPaWEK0B2+BZwtQFd4CThTADfwhwjoEgj4Xjs8TezDefCj511jX3NcndsQoevd5ABTEn0GuAm8xP1bwbcIwAI3cz7VdakEmOBN8IhjIw9zxKtlHlxirDGcZ6jqYc5f9ERpZnFVBk4AAAAASUVORK5CYII=`;

var userbarStyle = document.createElement("style");
var dropdown = `data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMC41Nzc5MiIgaGVpZ2h0PSI4LjA0MzQ2IiB2aWV3Qm94PSIwLDAsMTAuNTc3OTIsOC4wNDM0NiI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIzNC42OTQ5NCwtMTc2LjQ3MjkxKSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIzNS41LDE3Ny4xMTE0OWw0LjI1Njc2LDUuNzc3MDNsNC43NDMyNCwtNS43NzcwM2wtNC43NDMyNCw1LjcxNjIyeiIvPjwvZz48L2c+PC9zdmc+`;
userbarStyle.innerHTML = `
.userdiv {
	background-color:#3b5bdb;
	height: 48px;
	width:150px;
	float:right;
	color:white;
	cursor:pointer;
}
.usrn {
	font-weight:bold;
}
.userdropdown {
	position:fixed;
	top:48px;
	right:0px;
	width:150px;
	height: fit-content;
	min-height:48px;
	background-color:#3b5bdb;
	cursor:pointer;
	z-index:100000000000;
}
.ud_item {
	height:48px;
	width:100%;
	font-weight:bold;
	color:white;
	cursor:pointer;
	line-height:48px;
}
.ud_item:hover {
	background:#364fc7;
}
`;
document.body.appendChild(userbarStyle);
if (!(localStorage.getItem("username"))) {
	if (window.isHome) {
		var div = document.createElement("div");
		div.innerHTML = "<a style='float:right;' href='login.html'><p class='main_menu_item'>Login</p></a>";
		menubar.appendChild(div);
		var div = document.createElement("div");
		div.innerHTML = "<a style='float:right;' href='createaccount.html'><p class='main_menu_item'>Create Account</p></a>";
		menubar.appendChild(div);
	}
}
servers.readFile("ggm2-logininfo.json", (data) => {
	var loginJSON = JSON.parse(data);
    if (loginJSON.accounts[localStorage.getItem("username")]) {
        var userinfo = loginJSON.accounts[localStorage.getItem("username")];
        if (userinfo.password == localStorage.getItem("password")) {
			   var userdiv = document.createElement("div");
			   var userdropdown = document.createElement("div");
			   userdiv.setAttribute("class","userdiv");
			   userdropdown.setAttribute("class","userdropdown");
			   userdiv.innerHTML = `
			   <img src="${userinfo.pfp}" width=32 height=32 style="margin-top:8px;">
			   <span class="usrn">${localStorage.getItem("username")}</span>
			   <img src="${dropdown}">
			   `;
			   menubar.appendChild(userdiv);
			   menubar.appendChild(userdropdown);
			   window.logOut = function () {
					localStorage.setItem("username","");
					localStorage.setItem("password","");
					window.location.reload();
			   };
			   var homeStuff = `
			   <div class="ud_item" onclick="
				var a = document.createElement('a');
				a.href='profile.html?username=${localStorage.getItem("username")}';
				a.click();
			   ">
				<span>Profile</span>
			   </div>
			   <div class="ud_item" onclick="
				var a = document.createElement('a');
				a.href='accountsettings.html';
				a.click();
			   ">
				<span>Account Settings</span>
			   </div>
			   `;
			   var editorStuff = `
			   <div class="ud_item" onclick="
				var a = document.createElement('a');
				a.href='../profile.html?username=${localStorage.getItem("username")}';
				a.click();
			   ">
				<span>Profile</span>
			   </div>
			   <div class="ud_item" onclick="
				var a = document.createElement('a');
				a.href='../accountsettings.html';
				a.click();
			   ">
				<span>Account Settings</span>
			   </div>
			   `;
			   userdropdown.innerHTML = `
			   <div class="ud_item" onclick="window.logOut();"><span>Log Out</span></div>
			   ${window.isHome? (homeStuff): editorStuff}
			   `;
			   userdropdown.hidden = true;
			   userdiv.onclick = function () {
				   userdropdown.hidden = !(userdropdown.hidden);
			   };
        } else {
        }
    } else {
	}

});