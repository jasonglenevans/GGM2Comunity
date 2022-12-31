servers.saveFile("ggm-info.json",JSON.stringify({
    hacked:false,
    fixing:true
}),function () {
    console.log("updated info.");
})