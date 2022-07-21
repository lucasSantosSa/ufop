import '../styles/ToggleIcon.css'
const ToggleIcon =(props)=>{

        function toggle(){
                let rightDot = "M 11.5 2 C 12.3284 2 13 2.6716 13 3.5 C 13 4.3284 12.3284 5 11.5 5 C 10.6716 5 10 4.3284 10 3.5 C 10 2.6716 10.6716 2 11.5 2"
                let leftDot = "M 3.5 2 C 4.3284 2 5 2.6716 5 3.5 C 5 4.3284 4.3284 5 3.5 5 C 2.6716 5 2 4.3284 2 3.5 C 2 2.6716 2.6716 2 3.5 2"
                let background = "M 0 3.5 C 0 1.567 1.567 0 3.5 0 H 11.5 C 13.433 0 15 1.567 15 3.5 C 15 5.433 13.433 7 11.5 7 H 3.5 C 1.567 7 0 5.433 0 3.5 Z"
                if(props.collapse){
                        
                        return <path d={background+leftDot}/>
                }
                else{
                        return <path d={background+rightDot}/>
                }
        }

                return(
                        <svg 
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg" 
                                fillRule="evenodd"
                                clipRule="evenodd"
                                imageRendering="optimizeQuality"
                                shapeRendering="geometricPrecision"
                                textRendering="geometricPrecision"
                                viewBox="0 0 15 9.15"
                                id='ToggleIcon'
                        >
                                <path className={props.collapse?'on':'off'}     id="bg"    d="M 0 3.5 C 0 1.567 1.567 0 3.5 0 H 11.5 C 13.433 0 15 1.567 15 3.5 C 15 5.433 13.433 7 11.5 7 H 3.5 C 1.567 7 0 5.433 0 3.5 Z"/>
                                <path className={props.collapse?'left':'right'} id="lBall" d="M 3.5 2 C 4.3284 2 5 2.6716 5 3.5 C 5 4.3284 4.3284 5 3.5 5 C 2.6716 5 2 4.3284 2 3.5 C 2 2.6716 2.6716 2 3.5 2"/>
                                <path className={props.collapse?'left':'right'} id="rBall" d="M 11.5 2 C 12.3284 2 13 2.6716 13 3.5 C 13 4.3284 12.3284 5 11.5 5 C 10.6716 5 10 4.3284 10 3.5 C 10 2.6716 10.6716 2 11.5 2"/>
                        </svg>
                );
}

export default ToggleIcon;