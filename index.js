const shortErrorMessage = () => {
  throw new Error('my error text message');
};

const longerErrorMessage = () => {
  throw new Error('my error text message with some extra text');
};

console.log('Nothing to do here. Run `npm test`');

module.exports = {
  shortErrorMessage,
  longerErrorMessage,
};
