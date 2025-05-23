export class User {
  readonly #id: string;
  #firstName: string;
  #middleName: string;
  #surname: string;

  constructor(
    id: string,
    firstName: string,
    middleName: string,
    surname: string,
  ) {
    this.#id = id;
    this.#firstName = firstName;
    this.#middleName = middleName;
    this.#surname = surname;
  }

  get id(): string {
    return this.#id;
  }

  get firstName(): string {
    return this.#firstName;
  }

  get middleName(): string {
    return this.#middleName;
  }

  get surname(): string {
    return this.#surname;
  }
}

