import '../styles/MoreInfoIcon.css'
const MoreInfoIcon =(props)=>{

    return(
        <svg 
        version="1.1"
        xmlns="http://www.w3.org/2000/svg" 
        fillRule="evenodd"
        clipRule="evenodd"
        imageRendering="optimizeQuality"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 386.182 386.182"
        id='MoreInfoIcon'
        className={props.collapse}
        >
            <path d="M287.19,61.03H183.811v92.86c0,3.004-1.785,5.723-4.544,6.915c-0.961,0.415-1.979,0.618-2.987,0.618
		c-1.882,0-3.738-0.706-5.164-2.047L147.652,137.3l-23.464,22.076c-2.188,2.059-5.392,2.621-8.15,1.429
		c-2.76-1.192-4.544-3.911-4.544-6.915V61.03H92.238c-6.549,0-11.878-5.332-11.878-11.881c0-6.551,5.329-11.881,11.878-11.881
		h212.619c10.273,0,18.636-8.359,18.636-18.635C323.492,8.357,315.131,0,304.856,0H92.237c-27.1,0-49.146,22.049-49.146,49.148
		v281.135c0,30.823,25.077,55.898,55.9,55.898h188.2c30.823,0,55.9-25.075,55.9-55.898V116.928
		C343.091,86.108,318.014,61.03,287.19,61.03z"/>
        </svg>
    );
}

export default MoreInfoIcon;