import React, {
    useState
} from 'react';
import BirdEyeViewImage from '../../statics/WhiteMountains_masked.jpg';

type RotationDirection = 'clockwise' | 'counterclockwise'

const ImageViewer:React.FC= () => {

    const [ rotationDeg, setRotationDeg ] = useState<number>(0);

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

    return (
        <div
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                overflow: 'hidden',
                // transform: `roatate(45deg)`
                background: '#000'
            }}
            onWheel={(evt)=>{
                const direction:RotationDirection = evt.deltaY < 0 ? 'counterclockwise' : 'clockwise';
                rotateImage(direction)
            }}
        >
            <img 
                style={{
                    transform: `rotate(${rotationDeg}deg)`
                }}
                src={BirdEyeViewImage} 
            />
        </div>
    )
}

export default ImageViewer
