interface I_Debounce {
  (limit: number, callback: () => void): EventListenerOrEventListenerObject;
}

const debounce: I_Debounce = (limit, callback) => {
  let timeoutId: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(callback, limit, args);
  };
};

export default debounce;
