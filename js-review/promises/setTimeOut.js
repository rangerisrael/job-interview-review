export const waitSec = function (ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
