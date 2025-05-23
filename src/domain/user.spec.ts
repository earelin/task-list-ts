import { User } from './user';

describe('User', () => {
  it('should set all properties via constructor', () => {
    const user = new User('u1', 'John', 'M', 'Doe');

    expect(user.id).toBe('u1');
    expect(user.firstName).toBe('John');
    expect(user.middleName).toBe('M');
    expect(user.surname).toBe('Doe');
  });

  it('should allow updating firstName, middleName, and surname', () => {
    const user = new User('u2', 'Jane', 'A', 'Smith');

    user.firstName = 'Janet';
    user.middleName = 'B';
    user.surname = 'Doe';

    expect(user.firstName).toBe('Janet');
    expect(user.middleName).toBe('B');
    expect(user.surname).toBe('Doe');
  });
});
