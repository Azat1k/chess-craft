import {FigureNames, Figure} from "./Figure.ts";
import {Colors} from "../Colors";
import {Square} from "../Square";
import blackLogo from '../../assets/black-bishop.png'
import whiteLogo from '../../assets/white-bishop.png'
import {DiagonalMovement} from "../movement/DiagonalMovement";

export class Bishop extends Figure {

    constructor(color: Colors, square: Square) {
        super(color, square);
        this.logo = color === Colors.black ? blackLogo : whiteLogo;
        this.name = FigureNames.BISHOP
        this.movement = [new DiagonalMovement()]
    }
}