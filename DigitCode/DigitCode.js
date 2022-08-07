let DigitCode = (obj, callback) => {

  let count = obj.count ? obj.count : 4,
      type = obj.type ? obj.type : "text";

  let placeholder = document.querySelector(obj.id);
  let inputs = [];
  for (let i = 0; i <= count - 1; i++) {
    let increator = document.createElement("input");
    increator.setAttribute("maxlength", "1");
    increator.type = obj.type;
    placeholder.append(increator);
    inputs.push(increator);
  }

  inputs.forEach((input, index) => {

    input.addEventListener("click", (e) => {
      e.preventDefault();
    });

    input.addEventListener("keyup", function(e) {

      switch (e.key) {
        case "ArrowLeft":
          if (index != 0) {
            inputs[index - 1].focus();
          }
          break;
        case "ArrowRight":
          if (index != count - 1) {
            inputs[index + 1].focus();
          }
          break;
        case "Backspace":
          if (index != 0) {
            inputs[index].value = "";
            inputs[index].classList.remove("filled");
            inputs[index - 1].value = "";
            inputs[index - 1].removeAttribute("readonly");
            inputs[index - 1].focus();
          }
      }

      if (input.value) {
        if (index == count - 1) {
          var codepin = [...inputs].map((input) => input.value).join("");
          if (codepin.length == count) {
            callback(codepin);
          }
          inputs[index].classList.add("class", "filled")
          inputs[index].focus();
        } else {
          inputs[index].classList.add("filled");
          inputs[index].setAttribute("readonly", true);
          inputs[index + 1].focus();
        }
      }
    });
  });

  let styletag = document.createElement("style");
  styletag.setAttribute("digitcode",obj.id);
  styletag.innerHTML = `${obj.id} input {-webkit-appearance: none;appearance: none;margin: 0 0.5rem;padding: 0.5rem;border: 2px solid #333;width: 40px;height: 40px;border-radius: 5px;text-align: center;font-size: 3rem;user-select: none;}
  ${obj.id} input.filled {border: 2px solid #1e90ff; color: #1e90ff;}
  ${obj.id} input::-webkit-outer-spin-button,
  ${obj.id} input::-webkit-inner-spin-button {-webkit-appearance: none; margin: 0;}
  ${obj.id} input[type=number] {-moz-appearance: textfield;}`;
  document.querySelector('head').append(styletag);
}

export default DigitCode;
