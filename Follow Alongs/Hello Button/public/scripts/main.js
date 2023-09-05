let counter = 0;

function main() {
    console.log('Ready')
    document.querySelector('#dButton').onclick = () => {
        counter -= 1;
        updateView();
    }
    document.querySelector('#rButton').onclick = () => {
        counter = 0;
        updateView();
    }
    document.querySelector('#iButton').onclick = () => {
        counter += 1;
        updateView();
    }

}

function updateView() {
    console.log("Updating view")
    document.querySelector('#counterText').innerHTML = `Count = ${counter}`;
}

main();