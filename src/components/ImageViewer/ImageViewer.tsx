import React, {
    useState
} from 'react';
import BirdEyeViewImage from '../../statics/WhiteMountains_masked.jpg';
import useWindowSize from '@rehooks/window-size';

type RotationDirection = 'clockwise' | 'counterclockwise'

const AspectRatio = .951;

const ImageViewer:React.FC= () => {

    const [ rotationDeg, setRotationDeg ] = useState<number>(0);

    const windowSize = useWindowSize();

    const rotateImage = (direction: RotationDirection)=>{

        setRotationDeg(currentDeg=>{
            let newVal = direction === 'clockwise' 
                ? currentDeg + 1 
                : currentDeg - 1;

            if(newVal < 0 ){
                newVal = 360;
            }

            if(newVal > 360){
                newVal = 0;
            }
            return newVal
        })
    }

    const getLeftPositon = ()=>{
        const { innerHeight, innerWidth } = windowSize;

        const imageWidth = (innerHeight * 2)* AspectRatio;

        return (innerWidth - imageWidth) / 2;
    };

    return (
        <div
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                overflow: 'hidden',
                background: 'rgb(253,234,202)'
            }}
            onWheel={(evt)=>{
                const direction:RotationDirection = evt.deltaY < 0 ? 'counterclockwise' : 'clockwise';
                rotateImage(direction)
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: getLeftPositon(),
                    height: '200vh',
                    width: `calc(200vh*${AspectRatio})`,
                    backgroundImage: `url(${BirdEyeViewImage})`,
                    backgroundPositionX: 'center',
                    backgroundPositionY: 'top',
                    backgroundSize: 'cover',
                    transform: `rotate(${rotationDeg}deg)`
                }}
            ></div>

            {/* <img 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transform: `rotate(${rotationDeg}deg)`,
                    height: '200vh',
                    width: `calc(200vh*.951)`
                }}
                src={BirdEyeViewImage} 
            /> */}
        </div>
    )
}

export default ImageViewer
