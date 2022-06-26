if (window.vm && window.renderer && window.audioEngine) {
    document.addEventListener("keyup", function (event) {
        vm.simulateKey({
            key: event.key,
            down: false
        });
        event.preventDefault();
    });
    document.body.addEventListener("mouseup", function (event) {
        event.preventDefault();
        vm.setMouseDown(false);
    });
    window.GGM2Intergration = class {
        constructor(src) {
            this.DIV = document.createElement("div");
            this.containers = {};
            var classGGM2Intergration = this;
            classGGM2Intergration.DIV.setAttribute("style", "width:680px;height:380px;background-color:black;");
            classGGM2Intergration.containers.controlBar = {
                container: document.createElement("div"),
            };
            classGGM2Intergration.containers.canvas = document.createElement("canvas");
            classGGM2Intergration.containers.controlBar.container.innerHTML = `

     <button style="border:none;background-color:#e9ecef;cursor:pointer;" onclick="vm.start();">Start</button>

     <button style="border:none;background-color:#e9ecef;cursor:pointer;" onclick="vm.stop();">Stop</button>

    `;
            classGGM2Intergration.containers.controlBar.container.setAttribute("style", "background-color:#e9ecef;width:680px;height:20px;");
            classGGM2Intergration.DIV.appendChild(classGGM2Intergration.containers.controlBar.container);
            classGGM2Intergration.containers.canvas.width = 600;
            classGGM2Intergration.containers.canvas.height = 360;
            classGGM2Intergration.containers.canvas.style.background = "white";
            var centerThing = document.createElement("center");
            centerThing.appendChild(classGGM2Intergration.containers.canvas);
            classGGM2Intergration.DIV.appendChild(centerThing);
            renderer.canvas = classGGM2Intergration.containers.canvas;
            vm.attachRenderer(renderer);
            vm.attachAudioEngine(audioEngine);
            this.loadContentRAWJSON = function (data) {
                try {
                    window.vm.project.resources = [];
                    var json = JSON.parse(data);
                    vm.code = json.code;
                    var files = json.files;
                    var index = 0;
                    while (index < files.length) {
                        window.vm.project.resources[files[index].name] = {
                            name: files[index].name,
                            data: files[index].data,
                            type: files[index].type
                        };
                        index += 1;
                    }
                    console.log("[GGM2Intergration]: Loaded File With No Errors.");
                } catch (e) {
                    console.error("[GGM2Intergration]: Faied To Read File: " + e);
                }
            };
            this.loadContent = function (src) {
                fetch(src, {
                    method: "GET"
                }).then(function (e) {
                    e.text().then(function (e) {
                        classGGM2Intergration.loadContentRAWJSON(e);
                    });
                });
            };
            this.DIV.addEventListener("keydown", function (event) {
                vm.simulateKey({
                    key: event.key,
                    down: true
                });
                event.preventDefault();
            });
            this.DIV.addEventListener("mousemove", function (event) {
                function getMousePos(canvas, evt) {
                    var rect = canvas.getBoundingClientRect();
                    return {
                        x: ((evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width) / 2,
                        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
                    };
                }
                var pos = getMousePos(renderer.canvas, event);
                var x = Math.round(pos.x / 1) - (renderer.canvas.width / 2) / 2;
                var y = Math.round(pos.y * -1) + (renderer.canvas.height / 2);
                event.preventDefault();
                vm.setMousePos({
                    x: x,
                    y: y
                });
            });
            this.DIV.addEventListener("mousedown", function (event) {
                event.preventDefault();
                vm.setMouseDown(true);
            });
            if (src) {
                this.loadContent(src);
            }
        }
    };
} else {
    console.log("please add the compressed vm to the scripts.")
}
