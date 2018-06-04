window.console.console = (output = console.log) => {
  const randomChoice = arr => arr[Math.floor(Math.random()*arr.length) + 1];
  const messages = [
    "You're doing great!"
    // TODO: add more messages here. PRs welcome.
  ];
  output(randomChoice(messages));
};
