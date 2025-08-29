function ProgressBar({label,color,width,stripColor}) {
    return (  
        <div className="progressBarContainer">
            <label className="progressBarLabel">{label+":"}</label>
            <div className="progressBar" style={{"--progress-color":color,"--progress-width":width,"--strip-color":stripColor}}></div>
        </div>
    );
}

export default ProgressBar;