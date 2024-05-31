interface Users {
  nome: string;
  age: number;
  salary: number;
}

class Usuario {
  user: Users;

  constructor(user: Users) {
    this.user = user;
  }
}

class CreateUser {
  execute() {
    let newUser: Users = {
      nome: "Lucas",
      age: 25,
      salary: 50000,
    };
    const createMyUser = new Usuario(newUser);

    console.log(createMyUser);
  }

  constructor() {
    this.execute();
  }
}

new CreateUser();
