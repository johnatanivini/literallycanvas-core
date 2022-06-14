import {ToolWithStroke} from "./base";
import {createShape} from "../shapes";

class Estrela extends ToolWithStroke {
    begin(x, y, lc) {
        return this.currentShape = createShape('Estrela', {
            x: x,
            y: y,
            strokeWidth: this.strokeWidth,
            strokeColor: lc.getColor('primary'),
            fillColor: lc.getColor('transparent')
        });
    }

    // continue(x, y, lc) {
    //     this.currentShape.width = x - this.currentShape.x;
    //     this.currentShape.height = y - this.currentShape.y;
    //     return lc.drawShapeInProgress(this.currentShape);
    // }

    end(x, y, lc) {
        var img = new Image();
        img.src = '/img/resenha/estrela.png';
        return lc.saveShape(LC.createShape('Image', {
            x: x,
            y: y,
            image: img
        }));
    }
}

Estrela.prototype.name = "Estrela";
Estrela.prototype.iconName = "estrela";

export default Estrela;
