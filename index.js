if (typeof console === 'object') {
  console.console = (output = console.log) => {
    const randomChoice = arr => arr[Math.floor(Math.random()*arr.length) + 1];
    const messages = [
      "You're doing great!",
      "It could be worse.",
      "Coding in practice is a lot of trial and error. In fact itʼs mostly that. Itʼs not you.",
      "Your worth as a person is not determined by your coding ability.",
      "JavaScript sucks. I mean itʼs gotten better but itʼs still kinda lipstick on a pig. A very well-intentioned pig with well-intentioned makeup artists."
      // TODO: add more messages here. PRs welcome.
    ];
    output(randomChoice(messages));
  }; 
}
