import {FigureNames, Figures} from "./Figures";
import {Colors} from "../Colors";
import {Square} from "../Square";
import blackLogo from '../../assets/black-king.png'
import whiteLogo from '../../assets/white-king.png'
import {VerticalMovement} from "../movement/VerticalMovement";
import {HorizontalMovement} from "../movement/HorizontalMovement";
import {DiagonalMovement} from "../movement/DiagonalMovement";
import {LimitedMovement} from "../movement/LimitedMovement";

export class King extends Figures {

    constructor(color: Colors, square: Square) {
        super(color, square);
        this.logo = color === Colors.black ? blackLogo : whiteLogo;
        this.name = FigureNames.KING
        this.movement = [
            new LimitedMovement(new VerticalMovement(),1),
            new LimitedMovement(new HorizontalMovement(),1),
            new LimitedMovement(new DiagonalMovement(),1)
        ]
    }
}