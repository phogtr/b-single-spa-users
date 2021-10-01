export interface IUserData {
  id: string;
  username: string;
  phone: string;
}

export const getData: () => Promise<IUserData[]> = async () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
};
