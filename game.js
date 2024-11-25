const rollDiceButton = document.getElementById('rollDice');
const diceResult = document.getElementById('diceResult');

rollDiceButton.addEventListener('click', () => {
  const dice = Math.floor(Math.random() * 6) + 1;
  diceResult.textContent = `نتيجة النرد: ${dice}`;
});
