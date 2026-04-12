import {FigureNames, Figure} from "./Figure.ts";
import {Colors} from "../Colors";
import {Square} from "../Square";
import blackLogo from '../../assets/black-queen.png'
import whiteLogo from '../../assets/white-queen.png'
import {VerticalMovement} from "../movement/VerticalMovement";
import {HorizontalMovement} from "../movement/HorizontalMovement";
import {DiagonalMovement} from "../movement/DiagonalMovement";

export class Queen extends Figure {

    constructor(color: Colors, square: Square) {
        super(color, square);
        this.logo = color === Colors.black ? blackLogo : whiteLogo;
        this.name = FigureNames.QUEEN
        this.movement = [new VerticalMovement(), new HorizontalMovement(), new DiagonalMovement()];
    }
}