function stringEditor(string, button) {
    if (string.length < 9) {
        if (string != "0") {
            string = string + button.id.slice(1, 2);
        } else if (string == "0") {
            string = button.id.slice(1, 2);
        };
    };

    return string;
}

function add(a, b) {
    return a + b
}

function operate(operation, a, b) {
    switch (operation) {
        case "add":
            return add(a, b);
    }
}

function main() {
    const display = document.querySelector("#display");
    const acButton = document.querySelector("#AC");
    const cButton = document.querySelector("#bC");
    const addButton = document.querySelector("#bplus");
    const eqButton = document.querySelector("#beq")

    let string = "0";
    let operandA = "0";
    let mode = "";

    display.textContent = string;

    for (i = 0; i < 10; i++) {
        const button = document.querySelector(`#b${i}`);
        button.addEventListener("click", () => {
            string = stringEditor(string, button)
            display.textContent = string;
        });
    };
    
    acButton.addEventListener("click", () => {
        string = "0";
        operandA = "0";
        display.textContent = string;
    });

    cButton.addEventListener("click", () => {
        if (string.length > 1) {
            if (string != "0") {
            string = string.slice(0, string.length - 1);
            display.textContent = string;
            };
        } else {
            string = "0";
            display.textContent = string;
        };
    });

    addButton.addEventListener("click", () => {
        mode = "add";
        if (operandA == "0") {
            operandA = string;
        } else {
            display.textContent = String(Number(operandA) + Number(string));
            operandA = String(Number(operandA) + Number(string))
        };
        string = "0";
    })

    eqButton.addEventListener("click", () => {
        display.textContent = String(operate(mode, Number(operandA), Number(string)))
    })
}

main()