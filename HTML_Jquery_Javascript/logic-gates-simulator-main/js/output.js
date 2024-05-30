class Output {
    static outputs = [];

    constructor(ctx, posX, posY, sideLength, separation, fixed=true, gate=null, element=null) {
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
        this.sideLength = sideLength;
        this.separation = separation;
        this.height = Math.sqrt(this.sideLength ** 2 - (this.sideLength/2) ** 2);
        this.fixed = fixed;
        this.gate = gate;
        this.element = element;
        this.state = 0;
        this.connectionsState = 0;
        this.connections = [];
        this.boundingBox = [
            this.posX - this.height,
            this.posY,
            this.posX,
            this.posY + this.sideLength
        ];
        if (this.fixed) boundings.push({type: "fixedOutput", element: this});
        else if (!this.fixed) boundings.push({type: "gateOutput", element: this});
        Output.outputs.push(this);
    }

    draw() {
        if (this.state === 0) {
            ctx.fillStyle = "#000000";
        }
        else if (this.state === 1) {
            ctx.fillStyle = "#f44336";
        }
        this.ctx.beginPath();
        this.ctx.moveTo(this.posX, this.posY);
        this.ctx.lineTo(this.posX - this.height, this.posY + this.sideLength/2);
        ctx.lineTo(this.posX, this.posY + this.sideLength);
        ctx.fill();
    }

    static sort() {
        let outputs = [];
        for (let i = 0; i < Output.outputs.length; ++i) {
            if (Output.outputs[i].fixed) {
                outputs.push(Output.outputs[i]);
            }
        }
        for (let i = 0; i < outputs.length; ++i) {
            let factor = i - (outputQuantity/2 - 0.5);
            let startPoint = [innerWidth, innerHeight/2 - outputs[i].sideLength/2 + outputs[i].sideLength * factor + factor * outputs[i].separation];
            outputs[i].posX = startPoint[0];
            outputs[i].posY = startPoint[1];
            outputs[i].boundingBox = [
                outputs[i].posX - outputs[i].height,
                outputs[i].posY,
                outputs[i].posX,
                outputs[i].posY + outputs[i].sideLength
            ];
        }
        draw();
    }

    changeState(state = null) {
        let previousState = this.state;
        if (state === null) {
            if (this.state === 0) this.state = 1;
            else if (this.state === 1) this.state = 0;
            draw();
        }
        else {
            if (state === 0) {
                this.connectionsState--;
                if (this.connectionsState < 0) this.connectionsState = 0;
            }
            else if (state === 1) {
                this.connectionsState++;
            }
            if (this.connectionsState >= 1) this.state = 1;
            else this.state = 0;
            draw();
        }
        if (!this.fixed && this.state != previousState) {
            LogicGate.gates[this.gate].updateInputs(this.element, this.state);
        }
    }

    addConnection(connection) {
        for (let i = 0; i < this.connections.length; ++i) {
            if (this.connections[i]["element"] === connection["element"]) return;
        }
        this.connections.push(connection);
    }

    removeConnection(connection=null) {
        if (!connection) {
            for (let i = 0; i < this.connections.length; ++i) {
                this.connections[i]["element"].removeConnection(this);
            }
            this.connections = [];
        }
        else {
            for (let i = 0; i < this.connections.length; ++i) {
                if (this.connections[i]["element"] === connection) {
                    this.connections.splice(i, 1);
                    break;
                }
            }
        }
        draw();
    }

    remove() {
        this.removeConnection();
        for (let i = 0; i < Output.outputs.length; ++i) {
            if (Output.outputs[i] === this) {
                Output.outputs.splice(i, 1);
            }
        }
    }
}