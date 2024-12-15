import '../game_icon/game_icon.css';

function GameIcon(imageLink: string, gameTitle: string){
    return (<>
            <img className="gameImage" src={imageLink} alt="Logo" height={100} width={100} />
            <div className="gameTitle">
                {gameTitle}
        </div>
        
        
    </>)
}

export default GameIcon;