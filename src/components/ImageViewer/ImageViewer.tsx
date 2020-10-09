import React, {
    useState
} from 'react';
import BirdEyeViewImage from '../../statics/WhiteMountains_masked.jpg';
import NorthArrowImageURL from '../../statics/North.png';

import useWindowSize from '@rehooks/window-size';

type RotationDirection = 'clockwise' | 'counterclockwise'

const AspectRatio = .951;
const NorthArrowSize = 75;

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

        const imageWidth = (innerHeight * 3.2)* AspectRatio;

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
                    marginTop: '-12%',
                    left: getLeftPositon(),
                    height: '320vh',
                    width: `calc(320vh*${AspectRatio})`,
                    backgroundImage: `url(${BirdEyeViewImage})`,
                    backgroundPositionX: 'center',
                    backgroundPositionY: 'top',
                    backgroundSize: 'cover',
                    transform: `rotate(${rotationDeg}deg)`
                }}
            ></div>

            <div
                style={{
                    position: 'absolute',
                    bottom: '100px',
                    left: `calc(50% - ${NorthArrowSize/2}px)`,
                    transform: 'scaleY(.5)',
                    // transform: `rotate(${rotationDeg}deg)`,
                    // backgroundImage: `url(${NorthArrowImageURL})`,
                    // backgroundPositionX: 'center',
                    // backgroundPositionY: 'top',
                    // backgroundSize: `${NorthArrowSize}px ${NorthArrowSize}px`,
                    width: NorthArrowSize,
                    height: NorthArrowSize,
                    // boxShadow: '1px 2px 10px #000'
                }}
            >   
                <img 
                    style={{
                        transform: `rotate(${rotationDeg}deg)`,
                        // objectFit: 'contain',
                        // width: NorthArrowSize,
                        // height: NorthArrowSize
                    }}
                    src={NorthArrowImageURL} 
                />
            </div>


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
