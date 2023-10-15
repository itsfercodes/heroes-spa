import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function LoginPage() {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogin = () => {
    login('Fernando Lopez');

    const lastPath = localStorage.getItem('lastPath') || '/';
    navigate(lastPath, {
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
