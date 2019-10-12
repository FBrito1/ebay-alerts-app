import 'dotenv/config';
import Alert from '../../src/app/schemas/Alert';


// https://www.npmjs.com/package/mockingoose

describe('Alert Apis Suite Tests', () => {
  // POST
  it.todo('should save a alert (POST)');

  // GET
  it.todo('should return alert data by user email (GET)');
  it.todo('should return a not found error (GET)');
  it.todo('should return a email not provided error(GET)');

  // UPDATE
  it.todo('should update a alert (UPDATE)');
  it.todo('should return a incorrect email error (UPDATE)');
  it.todo('should return a not found error (UPDATE)');

  // DELETE
  it.todo('should delete a alert (DELETE)');
  it.todo('should return a not found error (DELETE)');

});
