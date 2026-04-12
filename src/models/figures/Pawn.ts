import {FigureNames, Figure} from "./Figure.ts";
import {Colors} from "../Colors";
import {Square} from "../Square";
import blackLogo from '../../assets/black-pawn.png'
import whiteLogo from '../../assets/white-pawn.png'
import {PawnMovement} from "../movement/PawnMovement";

export class Pawn extends Figure {

    isFirstStep: boolean = true;
    direction: number;

    constructor(color: Colors, square: Square) {
        super(color, square);
        this.direction = color === Colors.black ? 1 : -1;
        this.logo = color === Colors.black ? blackLogo : whiteLogo;
        this.name = FigureNames.PAWN
        this.movement = [new PawnMovement()]
    }


    override moveFigure (target: Square) {
        super.moveFigure(target);
        this.isFirstStep = false;
    }
}