const targetedWord = "Fork";
const resultWord = "Toto";

window.addEventListener('load', _ => {
  setTimeout(_ => {
    let elements = document.querySelectorAll("div, button, a, svg, tool-tip");
    elements.forEach(element => {
      let elementNodes = element.childNodes;
      elementNodes.forEach(node => {
        isInvolved = node.textContent.includes(targetedWord) && !node.hasChildNodes();
        if (isInvolved) {
          node.textContent = node.textContent.replace(targetedWord, resultWord);
          console.log(node);
        }
      })
    })
  }, 1000)
})