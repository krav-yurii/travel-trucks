const NUMBER_OF_ATTEMPTS = 5;
const RETRY_TIMEOUT = 1.5 * 1000;

export const componentLoader = (
  lazyComponent,
  attemptsLeft = NUMBER_OF_ATTEMPTS,
  retryTimeout = RETRY_TIMEOUT,
) => {
  return new Promise((resolve, reject) => {
    lazyComponent()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (attemptsLeft === 1) {
            reject(error);
            return;
          }
          componentLoader(lazyComponent, attemptsLeft - 1).then(resolve, reject);
        }, retryTimeout);
      });
  });
};
