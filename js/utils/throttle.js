const throttle = (
  callback,
  delay = 200
) => {

  let lastExecution = 0;

  let timeoutId = null;






  return function (...args) {

    const context = this;






    const now = Date.now();






    const remainingTime =
      delay - (
        now - lastExecution
      );






    if (
      remainingTime <= 0
    ) {

      if (timeoutId) {

        clearTimeout(
          timeoutId
        );

        timeoutId = null;
      }






      lastExecution = now;






      callback.apply(
        context,
        args
      );

    }






    else if (!timeoutId) {

      timeoutId =
        setTimeout(
          () => {

            lastExecution =
              Date.now();






            timeoutId = null;






            callback.apply(
              context,
              args
            );

          },
          remainingTime
        );

    }

  };

};





export default throttle;