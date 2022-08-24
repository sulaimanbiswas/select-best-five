const playerSelectBtn = document.getElementsByClassName("player-select-btn");
function PlayerName() {
  for (const playerBtn of playerSelectBtn) {
    playerBtn.addEventListener("click", () => {
      const PlayerName = playerBtn.parentNode.childNodes[1].innerText;
      const selectedPlayers = document.getElementById("selected-players");
      const totalSelectedPlayer = selectedPlayers.childNodes.length;
      if (totalSelectedPlayer >= 5) {
        alert("You are Already selected 5 players");
        return;
      }
      playerBtn.setAttribute("disabled", true);
      playerBtn.classList.add("bg-secondary");
      playerBtn.classList.remove("bg-primary");
      const selectedPlayer = document.createElement("li");
      selectedPlayer.innerText = PlayerName;
      selectedPlayer.classList.add("text-base", "font-normal", "text-white", "pl-3");
      selectedPlayers.appendChild(selectedPlayer);
    });
  }
}

PlayerName();
const selectedPlayers = document.getElementById("selected-players");
document.getElementById("calculate").addEventListener("click", () => {
  const parPlayer = getInputToValueById("per-player");
  const totalSelectedPlayer = selectedPlayers.childNodes.length;
  if (isNaN(parPlayer)) {
    alert("Please provide a valid number");
    return;
  }
  const totalPlayerExpenses = parPlayer * totalSelectedPlayer;
  setElementTextValue("player-expenses", totalPlayerExpenses);
});

document.getElementById("calculate-total").addEventListener("click", () => {
  const playerExpenses = getElementToValueById("player-expenses");
  const manager = getInputToValueById("manager");
  const coach = getInputToValueById("coach");
  if (isNaN(manager) || isNaN(coach)) {
    alert("Please provide a valid number");
    return;
  }
  const total = playerExpenses + manager + coach;

  setElementTextValue("total", total);
});
