//import './style.css'
// Aula 5 19:51
import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'
import BoardGame from "./src/objetcs/BoardGame"

const $root = document.querySelector('#root');
const $htmlBoardGame = BoardGame(6);


$root.insertAdjacentHTML('beforeend',$htmlBoardGame);
