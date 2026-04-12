import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/warcraftcn/card";
import { Figure } from "@/models/figures/Figure.ts";
import type { FC } from "react";

interface LostFiguresProps {
    LostWhiteFigures: Figure[];
    LostBlackFigures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({LostWhiteFigures, LostBlackFigures}) => {

    const groupedWhite = LostWhiteFigures.reduce((acc, figure) => {
        if (!acc[figure.name]) {
            acc[figure.name] = [];
        }
        acc[figure.name].push(figure);
        return acc;
    }, {} as Record<string, Figure[]>)

    const groupedBlack = LostBlackFigures.reduce((acc, figure) => {
        if (!acc[figure.name]) {
            acc[figure.name] = [];
        }
        acc[figure.name].push(figure);
        return acc;
    }, {} as Record<string, Figure[]>)

    return (
        <Card style={{ height: '100%', overflowY: 'auto', width: '400px' }}>
            <CardHeader style={{ textAlign: 'center', paddingTop: '2.5rem' }}>
                <CardTitle style={{ color: 'white', fontSize: '1.5rem' }}>Captured Figures</CardTitle>
            </CardHeader>
            <CardContent style={{paddingLeft: "1rem"}}>
                <div>
                    {Object.entries(groupedWhite).map(([name, figures]) => (
                        <div key={name} style={{ display: 'flex' }}>
                            {figures.map((figure, index) => (
                                <img
                                    key={figure.id}
                                    width={50}
                                    src={figure.logo!}
                                    alt={figure.name}
                                    style={{ marginLeft: index > 0 ? '-20px' : '0' }}
                                />
                            ))}
                        </div>
                    ))}
                </div>
                <div>
                    {Object.entries(groupedBlack).map(([name, figures]) => (
                        <div key={name} style={{ display: 'flex' }}>
                            {figures.map((figure, index) => (
                                <img
                                    key={figure.id}
                                    width={50}
                                    src={figure.logo!}
                                    alt={figure.name}
                                    style={{ marginLeft: index > 0 ? '-20px' : '0' }}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
export default LostFigures;