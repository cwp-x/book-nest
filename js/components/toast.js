let toastContainer = null;






const createToastContainer = () => {

  const container =
    document.createElement("div");






  container.className =
    "toast-container";






  document.body.appendChild(
    container
  );






  return container;

};








const createToastElement = (
  message,
  type = "info"
) => {

  const toast =
    document.createElement("div");






  toast.className =
    `toast toast-${type}`;






  toast.innerHTML = `

    <div class="toast-content">

      <span class="toast-message">

        ${message}

      </span>

    </div>

  `;






  return toast;

};








export const showToast = (
  message,
  type = "info"
) => {

  if (!toastContainer) {

    toastContainer =
      createToastContainer();

  }






  const toast =
    createToastElement(
      message,
      type
    );






  toastContainer.appendChild(
    toast
  );






  requestAnimationFrame(
    () => {

      toast.classList.add(
        "show"
      );

    }
  );






  setTimeout(() => {

    toast.classList.remove(
      "show"
    );






    setTimeout(() => {

      toast.remove();

    }, 300);

  }, 3000);

};





export const initToast = () => {

  if (!toastContainer) {

    toastContainer =
      createToastContainer();

  }

};





export default initToast;