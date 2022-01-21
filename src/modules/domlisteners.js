import DOM from "./dom";
import Todo from "./todos";

export default function event() {

    DOM.todoButton.addEventListener("click", () => {
        console.log("helloWorld");
        
    });

    DOM.fartButton.addEventListener("click", () => {
        console.log("FART");
    });

    document.addEventListener('click', (e) => {
        console.log(e);
    });

}