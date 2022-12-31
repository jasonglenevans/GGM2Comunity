/*

servers.saveFile("ggm-accounts.txt",
    JSON.stringify({
        users: {
            gvbvdxx: {
                bio: "Welcome! I Am The Devloper Of This Website!",
                password: "2010jason",
                banned: false
            }
        }
    }),
    () => {
    console.log("accounts data edited")
});


*/
window.getAccountData = function () {
	return new Promise((resolve,reject) => {
		servers.readFile("ggm-accounts.txt",
			(dataA) => {
			resolve(JSON.parse(dataA));
		});
	})
};
window.setAccountData = function (data) {
	return new Promise((resolve,reject) => {
		servers.saveFile("ggm-accounts.txt",
			JSON.stringify(data),
			(dataA) => {
			resolve(JSON.parse(dataA));
		});
	})
};