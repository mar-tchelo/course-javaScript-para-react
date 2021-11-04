import "./style.css"

function PlayerScore(points = 0) {
    return /*HTML*/`
        <ol class="player-score" data-points="${points}">
            <li class="pointer" >Um</li>
            <li class="pointer" >dois</li>
            <li class="pointer" >Três</li>
        </ol>
    `;
}

export default PlayerScore;