import AlertValidator from '../../src/app/validators/AlertValidator';

describe('AlertValidator', () => {
  // store
  it('should validate the payload (store)', async () => {
    const payload = {
      searchPhrase: "teste",
      userEmail: "fabio@tgeste.com",
      notificationSchedule: 2
    }

    const result = await AlertValidator.validateStore(payload);

    expect(result).toBe(payload);
  });

  it('should reject the payload (store)', async () => {
    // sending the email as a number
    const payload = {
      searchPhrase: "teste",
      userEmail: 10,
      notificationSchedule: 2
    };

    const result = await AlertValidator.validateStore(payload);
    expect(result).toEqual({
      isError: true,
      error: expect.any(String),
    });
  });

  //update

  it('should validate the payload (update)', async () => {
    const payload = {
      searchPhrase: "teste update",
    }

    const result = await AlertValidator.validateUpdate(payload);

    expect(result).toBe(payload);
  });

  it('should reject the payload (update)', async () => {
    // sending a invalid schedule number
    const payload = {
      notificationSchedule: 200
    };

    const result = await AlertValidator.validateUpdate(payload);
    expect(result).toEqual({
      isError: true,
      error: expect.any(String),
    });
  });
});
