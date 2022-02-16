import { User, ToDo } from "../types";

const fetchUsers = async (): Promise<Array<User>> => {
  const api = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch (e: any) {
    if (e) {
      console.log("error");
    }
  }
  return [];
};

const fetchToDos = async (userId: number): Promise<Array<ToDo>> => {
  const api = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;

  try {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch (e: any) {
    if (e) {
      console.log("error");
    }
  }
  return [];
};

export { fetchUsers, fetchToDos };
