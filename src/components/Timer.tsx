import {type FC, useCallback, useEffect, useRef, useState} from 'react';
import type {Player} from "@/models/Players.ts";
import {Colors} from "@/models/Colors.ts";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/warcraftcn/card";
import { Button } from "@/components/ui/warcraftcn/button";

interface TimerProps {
    currentPlayer: Player | null;
    restart: () => void;
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
    const [blackTime, setBlackTime] = useState(300)
    const [whiteTime, setWhiteTime] = useState(300)
    const timer= useRef<null |  ReturnType <typeof setInterval>>(null)

    function decreaseWhiteTimer () {
        setWhiteTime(prev => prev -1)
    }
    function decreaseBlackTimer () {
        setBlackTime(prev => prev -1)
    }

    function handleRestart() {
        setBlackTime(300)
        setWhiteTime(300)
        restart()
    }

    const startTimer = useCallback(() => {
        if (timer.current) {
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.colors === Colors.white ? decreaseWhiteTimer : decreaseBlackTimer
        timer.current = setInterval(callback, 1000)
    }, [currentPlayer])

    useEffect(() => {
        startTimer()
        return () => {
            if (timer.current) {
                clearInterval(timer.current)
            }
        }
    }, [currentPlayer, startTimer])

    return (
        <Card style={{width: "300px", height: "250px", margin:'0 auto'}}>
            <CardContent style={{color: 'white',textAlign: 'center', paddingTop: '1rem', fontSize: '2rem'}}>
                <h2>Black - {blackTime}</h2>
                <h2>White - {whiteTime}</h2>
            </CardContent>
            <CardFooter style={{justifyContent: 'center'}}>
                <Button style={
                    {
                    color: 'white',
                    paddingTop: '0.3rem',
                    fontSize:'1.5rem',
                    paddingLeft:'1.5rem',
                    paddingRight:'1.5rem'
                    }
                } onClick={handleRestart}>Restart</Button>
            </CardFooter>
        </Card>
    );
};

export default Timer;