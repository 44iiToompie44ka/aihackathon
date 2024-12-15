import '../game_icon/game_icon.css';

function GameIcon(imageLink: string, gameTitle: string){
    return (<>
        <div className="gameImage">        
            <img className="gameImage" src={imageLink} alt="Logo" height={100} width={100} />
        </div>
        <div className="gameTitle">
            {gameTitle}
        </div>
        
    </>)
}

export default GameIcon;