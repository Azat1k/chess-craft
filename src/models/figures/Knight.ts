import {FigureNames, Figure} from "./Figure.ts";
import {Colors} from "../Colors";
import {Square} from "../Square";
import blackLogo from '../../assets/black-knight.png'
import whiteLogo from '../../assets/white-knight.png'
import {KnightMovement} from "../movement/KnightMovement";

export class Knight extends Figure {

    constructor(color: Colors, square: Square) {
        super(color, square);
        this.logo = color === Colors.black ? blackLogo : whiteLogo;
        this.name = FigureNames.KNIGHT
        this.movement = [new KnightMovement()]
    }
}