enum Role {
  'Magician',
  'Warrior',
  'RingKeeper' = 'Ring Keeper',
}

interface User {
  fullName: string;
  age: number;
  dateOfBirth: Date;
  role: Role;
}

export interface UserStore {
  [key: string]: User;
}
export interface ActiveUsersResponse {
  id: string;
}

const usersStore: UserStore = {
  '20385002': {
    fullName: 'Harry Potter',
    age: 28,
    dateOfBirth: new Date('06/08/1992'),
    role: Role.Magician,
  },
  '53491379': {
    fullName: 'Jhon Snow',
    age: 72,
    dateOfBirth: new Date('04/02/1995'),
    role: Role.Warrior,
  },
  '05062047': {
    fullName: 'Frodo Baggins',
    age: 72,
    dateOfBirth: new Date('09/10/1993'),
    role: Role.RingKeeper,
  },
};

class UserService {
  constructor() {}

  async displayActiveUsers() {
    const activeUsers = await this.getActiveUsers();
    activeUsers.forEach((user) => {
      console.log(usersStore[user.id]);
    });
  }

  private async getActiveUsers(): Promise<ActiveUsersResponse[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const activeUsersResponse = [{ id: '20385002' }, { id: '53491379' }];

        resolve(activeUsersResponse);
      }, 4000);
    });
  }
}

const userService = new UserService();

userService.displayActiveUsers();
