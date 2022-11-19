export class FormValidator {
  _elementForm;
  _inputSelector;
  _inputList;
  _submitButtonSelector;
  _buttonElement;
  _inactiveButtonClass;
  _inputErrorClass;
  _errorClass;

  constructor(config, elementForm) {
    this._elementForm = elementForm;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._buttonElement = this._elementForm.querySelector(this._submitButtonSelector);
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inputList = Array.from(this._elementForm.querySelectorAll(this._inputSelector));
  }

  _showError(inputElement) {
    inputElement.classList.add(this._inputErrorClass);
    this._errorElement.textContent = inputElement.validationMessage;
    this._errorElement.classList.add(this._errorClass);
  };

  _hideError(inputElement) {
    inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorClass);
    this._errorElement.textContent = "";
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement);
    } else this._hideError(inputElement);
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _disableButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _enableButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._enableButton();
    };
  }

  _setEventListeners() {
    this._toggleButtonState();

    this._elementForm.addEventListener("reset", () => {
      setTimeout(() => {
        this._toggleButtonState();
      }, 0);
    });

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._errorElement = this._elementForm.querySelector(`.input-error-${inputElement.name}`);
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation() {
    this._elementForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
    })
    this._setEventListeners();
  }

}