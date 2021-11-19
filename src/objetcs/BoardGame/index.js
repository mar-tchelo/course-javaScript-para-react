import './styles.css';
import CardFrontBack from '../../components/CardFrontBack';
import cards from "./data"

function BoardGame(amountCards){     

    const htmlCardsList = cards.map((card) => CardFrontBack(card.icon), CardFrontBack(cards.altIcon));
    const $htmlCards = htmlCardsList.join('');

       
    return /*html*/ `
        <section class="board-game">
            ${$htmlCards }
            
        </section>
    `;
}

export default BoardGame;