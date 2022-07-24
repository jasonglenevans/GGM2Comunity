
//load blocks
gui.loadScript("blocks/control.js",function () {
	gui.loadScript("blocks/operators.js",function () {
		gui.loadScript("blocks/files.js",function () {
			gui.loadScript("blocks/game.js",function () {
				gui.loadScript("blocks/audio.js",function () {
					gui.loadScript("blocks/lists.js",function () {
						gui.loadScript("blocks/loging.js",function () {
							gui.loadScript("blocks/other.js",function () {
								gui.loadScript("blocks/variables.js",function () { //aka "display"
									loadDefaultGame(); //load function, for modders out there, call this when making a new game.
									try{setTimeout(onAllBlocksLoaded,150);}catch(e){}
								});
							});
						});
					});
				});
			});
		});
	});
});
console.log("[gui]:blocks loaded.");