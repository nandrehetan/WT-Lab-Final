class LogicGate {
    static gates = [];
    static gateData = {
        "AND": {
            color: "#7b00ff",
            table: {
                i0: [0, 1, 0, 1],
                i1: [0, 0, 1, 1],
                o0: [0, 0, 0, 1],
            },
        },
        "NOT": {
            color: "#ff0066",
            table: {
                i0: [0, 1],
                o0: [1, 0],
            },
        },
    };

    constructor(ctx, posX, posY, name, sideLength, separation) {
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
        this.name = name;
        this.sideLength = sideLength;
        this.separation = separation;
        this.color = LogicGate.gateData[name]["color"];
        this.fontSize = 25;
        this.xFrameOffset = 10;
        this.yFrameOffset = 0;
        this.table = LogicGate.gateData[name]["table"];
        this.inputs = [];
        this.outputs = [];
        this.outputsRef = [];
        for (let i in this.table) {
            if (i[0] == "i") this.inputs.push(0);
            else if (i[0] == "o") this.outputs.push(0);
        }
        this.gate = LogicGate.gates.length;
        LogicGate.gates.push(this);
        let size = this.draw();

        for (let element in this.table) {
            if (element[0] == "i") {
                let pos = parseInt(element[1]);
                new Output(ctx, this.posX-this.xFrameOffset, this.posY-size[1]/2-size[2]/2 + (pos * this.sideLength + pos * this.separation), this.sideLength, this.separation, false, this.gate, pos);
            }
            else if (element[0] == "o") {
                let pos = parseInt(element[1]);
                let output = new Input(ctx, this.posX+size[0]+this.xFrameOffset, this.posY-size[1]/2-size[2]/2 + (pos * this.sideLength + pos * this.separation), this.sideLength, this.separation, false);
                this.outputsRef.push(output);
            }
        }
        this.logic();
        draw();
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.font = `700 ${this.fontSize}px Open Sans`;
        let metrics = ctx.measureText(this.name);
        let width = metrics.width;
        let textHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
        let maxElements = (this.inputs.length >= this.outputs.length) ? this.inputs.length : this.outputs.length;
        let elementsHeight = maxElements*this.sideLength + (maxElements-1)*this.separation;
        ctx.fillRect(
            this.posX - this.xFrameOffset,
            this.posY - textHeight - elementsHeight/2 - this.yFrameOffset,
            width + this.xFrameOffset*2,
            textHeight + elementsHeight + this.yFrameOffset*2
        );
        ctx.fillStyle = "#ffffff";
        ctx.fillText(this.name, this.posX, this.posY);
        return [width, textHeight, elementsHeight];
    }

    logic() {
        let inputData = {};
        for (let i = 0; i < this.inputs.length; ++i) {
            inputData[i] = [];
            for (let j = 0; j < this.table[`i${i}`].length; ++j) {
                if (this.table[`i${i}`][j] == this.inputs[i]) inputData[i].push(j);
            }
        }
        let common = inputData[0];
        for (let i = 1; i < this.inputs.length; ++i) {
            if (common.length <= 0) return;
            for (let j = 0; j < common.length; ++j) {
                if (!inputData[i].includes(common[j])) {
                    common.splice(j, 1);
                }
            }
        }
        for (let i = 0; i < this.outputs.length; ++i) {
            this.outputs[i] = this.table[`o${i}`][common[0]];
            this.outputsRef[i].changeState(this.table[`o${i}`][common[0]]);
        }
    }

    updateInputs(output, state) {
        this.inputs[output] = state;
        this.logic();
    }

    static createGate(name, color) {
        let table = {};
        let inputs = [];
        let outputs = [];
        for (let i = 0; i < Input.inputs.length; ++i) {
            if (Input.inputs[i].fixed) {
                inputs.push(Input.inputs[i]);
                table[`i${inputs.length-1}`] = [];
            }
        }
        for (let i = 0; i < Output.outputs.length; ++i) {
            if (Output.outputs[i].fixed) {
                outputs.push(Output.outputs[i]);
                table[`o${outputs.length-1}`] = [];
            }
        }

        for (let i = 0; i < 2**inputs.length; ++i) {
            let bin = i.toString(2);
            while (bin.length < inputs.length) {
                bin = `0${bin}`;
            }
            for (let j = 0; j < bin.length; ++j) {
                inputs[j].changeState(parseInt(bin[bin.length-j-1]));
                table[`i${j}`].push(parseInt(bin[bin.length-j-1]));
            }
            draw();
            for (let j = 0; j < outputs.length; ++j) {
                table[`o${j}`].push(outputs[j].state);
            }
        }

        LogicGate.gateData[name] = {
            color: color,
            table: table,
        }
        document.getElementById("logicGateSelector").innerHTML += `<button class="buttonSelector unselectable">${name}</button>`;
        let buttons = document.getElementsByClassName("buttonSelector");
        for (let i = 0; i < buttons.length; ++i) {
            buttons[i].removeEventListener('click', changeGateSelected);
            buttons[i].addEventListener('click', changeGateSelected);
        }
    }

    remove() {
        for (let i = 0; i < LogicGate.gates.length; ++i) {
            if (LogicGate.gates[i] === this) {
                LogicGate.gates.splice(i, 1);
            }
        }
    }
}