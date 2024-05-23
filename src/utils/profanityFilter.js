//Obscenity npm
const {
  RegExpMatcher,
  TextCensor,
  englishDataset,
  englishRecommendedTransformers,
} = require("obscenity");

const matcher = new RegExpMatcher({
  ...englishDataset.build(),
  ...englishRecommendedTransformers,
});

//Examples:
//Check if there are any matches in some text:
// if (matcher.hasMatch("fuck you")) {
//   console.log("The input text contains profanities.");
// }

//Censoring matched text:
// const censor = new TextCensor();
// const input = "fuck you little bitch";
// const matches = matcher.getAllMatches(input);
// console.log(censor.applyTo(input, matches));
// %@$% you little **%@%

export const censoringWords = (text) => {
  const censor = new TextCensor();
  const matches = matcher.getAllMatches(text);
  return censor.applyTo(text, matches);
};
