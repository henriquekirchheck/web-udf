// @ts-check

const gameSection = /** @type {HTMLDivElement} */ (
  document.getElementById("game")
);

function init() {
  const gameDiv = document.createElement("div");
  gameDiv.style.display = "grid";
  gameDiv.style.gridTemplateColumns = "repeat(5, 1fr)";
  gameDiv.style.gridTemplateRows = "repeat(5, 1fr)";
  gameDiv.style.gap = "5px";

  const tiles = Array.from({ length: 5 * 5 }, (_, i) => {
    const tile = document.createElement("button");
    tile.style.width = "5rem"
    tile.style.height = "5rem"
    tile.style.backgroundColor = "salmon"
    tile.style.display = "flex"
    tile.style.justifyContent = "center"
    tile.style.alignItems = "center"
    tile.classList.add("hidden")
    if (Math.random() < 0.3) {
        tile.innerHTML = `<egg-svg width="2.5rem" height="2rem" color-lasso="#${Math.random().toString(16).slice(-6)}" color-egg="#${Math.random().toString(16).slice(-6)}"></egg-svg>`
    } else {
        const x = document.createElement("span")
        x.innerText = "X"
        x.style.fontSize = "2rem"
        x.style.color = "red"
        tile.appendChild(x)
    }
    tile.addEventListener("click", () => {
        tile.classList.remove("hidden")
        tile.style.pointerEvents = "none"
    })
    return tile;
  });

  for (const tile of tiles) {
    gameDiv.appendChild(tile);
  }
  gameSection.appendChild(gameDiv);
}

init();
