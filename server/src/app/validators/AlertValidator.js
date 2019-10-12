import * as Yup from 'yup';

class AlertValidator {
  async validateStore (payload) {
    const schema = Yup.object().shape({
      searchPhrase: Yup.string().required(),
      userEmail: Yup.string().email().required(),
      notificationSchedule: Yup.number().oneOf([2, 10, 30]).required(),
    });

    try {
      const response = await schema.validate(payload);

      return response;
    } catch (err) {
      return {
        isError: true,
        error: err.message,
      }
    };
  }

  async validateUpdate (payload) {
    const schema = Yup.object().shape({
      searchPhrase: Yup.string().required(),
      notificationSchedule: Yup.number().oneOf([2, 10, 30]).required(),
    });

    try {
      const response = await schema.validate(payload);

      return response;
    } catch (err) {
      return {
        isError: true,
        error: err.message,
      }
    };
  }
};

export default new AlertValidator();
