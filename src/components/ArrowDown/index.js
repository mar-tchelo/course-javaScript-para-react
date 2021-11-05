import './style.css'

function ArrowDown(currentPlayer = 1) {
    return /*HTML*/`
        <img class="arrow-down"
            data-currentPlayer="${currentPlayer}"
            src="images/IconArrowDown.png" 
            alt="Icone de seta para baixo" />

    `
}

export default ArrowDown;