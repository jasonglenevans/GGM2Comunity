window.libary = [
{
	type:"audio",
	name:"Retro Music.wav"
},
{
	type:"audio",
	name:"Retro Music 2.wav"
},
{
	type:"audio",
	name:"Sonic - Green Hill Zone.wav"
},
{
	type:"image",
	name:"aibo.svg"
},
{
	type:"audio",
	name:"Bossa Nova.wav"
},
{
	type:"audio",
	name:"Cave.wav"
},
{
	type:"audio",
	name:"Chill.wav"
},
{
	type:"audio",
	name:"Classical Piano.wav"
},
{
	type:"audio",
	name:"Alert.wav"
},
{
	type:"audio",
	name:"Coin.wav"
},
{
	type:"audio",
	name:"Skid.wav"
},
{
	type:"audio",
	name:"Collect.wav"
},
{
	type:"audio",
	name:"Bubbles.wav"
},
{
	type:"audio",
	name:"Crazy Laugh.wav"
},
{
	type:"audio",
	name:"Tennis Hit.wav"
},
{
	type:"audio",
	name:"Dance Around.wav"
},
{
	type:"audio",
	name:"Dance Funky.wav"
},
{
	type:"audio",
	name:"smiley island.wav"
},
{
	type:"audio",
	name:"Beep.wav"
},
{
	type:"audio",
	name:"Grass Walk.wav"
},
{
	type:"audio",
	name:"Cha Ching.wav"
},
{
	type:"audio",
	name:"8 bit Laser.wav"
},
{
	type:"audio",
	name:"Trumpet Ta Da.wav"
},
{
	type:"audio",
	name:"oof.wav"
}
];
var index = 0;
while (index < libary.length) {
	var div = document.createElement("div");
	
	div.setAttribute("class","libary_item");
	var src = window.getDirectory().gui+"/libary/"+libary[index].name;
	var name = libary[index].name.split(".")[0];
	div.style.float = "left";
	if (libary[index].type == "audio") {
		div.innerHTML = `<p>${name}:</p><audio controls src="${src}"></audio>
		<br><a download target="_blank" href="${src}"><button class="buttonBlue" style="margin-left:0px;margin-top:0px;">download</button></a>
		`;
	}
	if (libary[index].type == "image") {
		div.innerHTML = `<p>${name}:</p><br><img src="${src}" style="image-rendering:pixelated;" width=190 height=190>
		<br><a download target="_blank" href="${src}"><button class="buttonBlue" style="margin-left:0px;margin-top:0px;">download</button></a>
		`;
	}
	document.getElementById('libarySelection').appendChild(div);
	index += 1;
}