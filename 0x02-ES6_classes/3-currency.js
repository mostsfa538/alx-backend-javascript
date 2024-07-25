export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;  
  }

  set code(code) {
    this._code = code;  
  }

  set name(code) {
    this._name = code;  
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
