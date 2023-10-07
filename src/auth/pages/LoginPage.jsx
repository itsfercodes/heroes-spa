import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/marvel', {
      replace: true
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" type="submit" onClick={onLogin}>
        Login
      </button>
    </div>
  );
}
export default LoginPage;
