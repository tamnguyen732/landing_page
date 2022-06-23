const request = <T>(callback: () => Promise<T>): Promise<T> | undefined => {
  try {
    return callback();
  } catch (err) {
    console.log('Service error 👉', err);
  }
};

export default request;
