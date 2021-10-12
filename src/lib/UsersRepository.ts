
export class UsersRepository {
  async findAll() {
    return [
      {
        id: 1,
        name: "John Doe"
      },
      {
        id: 2,
        name: "Tom Smith"
      },
    ];
  }

  async add(user: any) {
    return Promise.resolve(user);
  }
}