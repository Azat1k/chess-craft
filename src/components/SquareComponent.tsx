import React, {FC} from 'react';
import {Square} from "../models/Square";

interface SquareProps {
    square: Square
    selected: boolean
    click: (square: Square) => void
}

const SquareComponent: FC<SquareProps> = ({square, selected, click}) => {
    return (
        <div className={[
            'square',
            square.color,
            selected ? 'selected' : ' '].join(' ')}
            onClick={() => click(square)}
             style = {{background : square.available && square.figure ? 'green' : ''}}
        >
            {square.available && !square.figure && <div className={'available'}></div>}
            {square.figure?.logo && <img src={square.figure.logo} alt=""/>}
        </div>
    );
};

export default SquareComponent;