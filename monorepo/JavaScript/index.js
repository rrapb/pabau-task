window.addEventListener('DOMContentLoaded', (event) => {
    const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    const shuffleButton = document.getElementById('shuffleButton');
    const changeButton = document.getElementById('changeButton');
    const showButton = document.getElementById('showButton');

    shuffleButton.addEventListener('click', shuffleValues);
    changeButton.addEventListener('click', changeValues);
    showButton.addEventListener('click', showSelectedValues);

    function shuffleValues() {
        const checkboxContainer = document.getElementById('checkboxContainer');
        const checkboxLabels = Array.from(checkboxContainer.getElementsByTagName('label'));

        shuffleArray(checkboxLabels);

        checkboxLabels.forEach((label) => {
            checkboxContainer.appendChild(label);
        });
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function changeValues() {
        checkboxes.forEach((checkbox) => {
            switch (checkbox.value) {
                case "Internship":
                    checkbox.parentNode.childNodes[1].textContent = "Rrap";
                    break;
                case "Pabau":
                    checkbox.parentNode.childNodes[1].textContent = "Eager";
                    break;
                case "Employment":
                    checkbox.parentNode.childNodes[1].textContent = "To";
                    break;
                case "Career":
                    checkbox.parentNode.childNodes[1].textContent = "Learn";
                    break;
            }
        });
    }

    function showSelectedValues() {
        const selectedValues = checkboxes
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => {
                let value = checkbox.value;
                if (checkbox.parentNode.childNodes[1].textContent !== checkbox.value) {
                    switch (checkbox.value) {
                        case "Internship":
                            value = "Rrap";
                            break;
                        case "Pabau":
                            value = "Eager";
                            break;
                        case "Employment":
                            value = "To";
                            break;
                        case "Career":
                            value = "Learn";
                            break;
                    }
                }
                return value;
            });

        const resultContainer = document.createElement('div');
        resultContainer.textContent = `Selected values: ${selectedValues.join(' ')}`;
        resultContainer.id="valuesSelected"

        const form = document.querySelector('form');
        form.appendChild(resultContainer)
    }
});
