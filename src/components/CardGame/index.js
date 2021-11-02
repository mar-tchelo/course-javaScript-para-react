import "./style.css";

function CardGame(icon='alura', alt ='Logo da Alura') {
    return /*html*/`

        <article class="card-game">
            <img src="images/${icon}.png" alt="${alt}" />
        </article>    

    `;
}

export default CardGame;