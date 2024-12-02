export interface Users {
  id: number;
  username: string;
  name: string;
  email: string;
}

export type UsersWithoutId = Omit<Users, 'id'>;
// тут мы говорим, что UsersWithoutId это то же самое что и Users, толко без ключа id

