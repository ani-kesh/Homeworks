window.onload = function () {
    let container = document.querySelector(".container");
    let containerText = container.innerText;
    setTimeout(() => {
        let expression = /\?+/gi;
        let replaceExpression = '<span class="emoji">&#128518;</span>';
        let expression1 = /!+/g;
        let replaceExpression1 = '<span class="emoji">&#128520;</span>';
        let newText = containerText.replace(expression, replaceExpression).replace(expression1, replaceExpression1);
        container.innerHTML = newText;
    }, 3000);
  };
  