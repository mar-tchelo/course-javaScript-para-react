import CardGame from "../CardGame";
import './style.css';

function CardFrontBack() {

    return /* Html*/ `
        <article class="card-front-back">
            <div class="card -front">
                ${CardGame()} 
            </div> 
            <div class="card -back">
                ${CardGame("javascript", "Logo do javascript")}
            </div>
        </article>
    `;
}

export default CardFrontBack;