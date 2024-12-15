import { Link } from "react-router-dom";

export function PageNotFound(){
    return(<>
    <h1>Страница не найдена!</h1>
        <Link to={"/aihackathon/"}> 
        <h3> <sup>На главную </sup></h3>
        </Link>

    <img src="https://media.tenor.com/h796J-dd0FUAAAAi/utya-utya-duck.gif" height={350} width={350} ></img>
    </>);
}