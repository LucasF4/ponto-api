import { v4 as uuidv4 } from "uuid";

export class User {
  public readonly id?: string;

  public first_name: string;
  public last_name: string;
  public email: string;
  public company: number;
  public password: string;

  constructor(props: {
    first_name: string;
    last_name: string;
    email: string;
    id?: string;
    company: number;
    password: string;
  }) {
    this.first_name = props.first_name;
    this.last_name = props.last_name;
    this.email = props.email;
    this.company = props.company;
    this.id = props.id;
    this.password = props.password;

    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
