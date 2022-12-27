import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ReactComponent as Google } from 'assets/google.svg';

function AuthForm() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}>
      <Form>
        <Form.Group
          className='mb-3'
          controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group
          className='mb-3'
          controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
          />
        </Form.Group>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 20px',
            gap: '40px',
          }}>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
          <Form.Text className='text-muted'>
            or authorize by google
          </Form.Text>
          <Button variant='primary' type='button'>
            <Google
              style={{ width: '24px', height: '24px' }}
            />
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AuthForm;
