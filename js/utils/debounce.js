const debounce = (
  callback,
  delay = 300
) => {

  let timeoutId;






  return function (...args) {

    const context = this;






    clearTimeout(
      timeoutId
    );






    timeoutId =
      setTimeout(
        () => {

          callback.apply(
            context,
            args
          );

        },
        delay
      );

  };

};





export default debounce;