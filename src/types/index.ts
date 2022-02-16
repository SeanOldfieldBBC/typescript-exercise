interface ToDo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchphrase: string;
    bs: string;
  };
}

interface UserWithToDos extends User {
  toDos: ToDo[]
}

export type { User, ToDo, UserWithToDos };
