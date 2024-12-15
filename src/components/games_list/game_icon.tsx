import '../games_list/game_icon.css';
import {Link} from "react-router-dom";

function GameIcon(imageLink: string, gameTitle: string, gamePath: string){
    return (<>
            <Link to={gamePath}
            ><img 
            className="gameImage" 
            src={imageLink} alt="Logo" 
            height={100}
            width={100} 
            /></Link>
            
            <div className="gameTitle">
                {gameTitle}
        </div>
        
        
    </>)
}

export default GameIcon;