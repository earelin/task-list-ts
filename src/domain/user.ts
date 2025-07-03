export class User {
  readonly #id: string;
  firstName: string;
  middleName: string;
  surname: string;

  constructor(
    id: string,
    firstName: string,
    middleName: string,
    surname: string,
  ) {
    this.#id = id;
    this.firstName = firstName;
    this.middleName = middleName;
    this.surname = surname;
  }

  get id(): string {
    return this.#id;
  }
}
