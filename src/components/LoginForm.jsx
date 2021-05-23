import { useState } from 'react';
import axios from 'axios';
import Logo from "../Images/Logo.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';


const projectID = '7bb9ba34-05d3-4577-9164-b8fe79d687a5';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Incorrect Credentials. Try Again!!');
    }
  };

  return (
    <div>
    <div className="wrapper">
      <div className="form">
        <img className="logo" alt="Logo" src={Logo} />
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span className="sc">Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
    </div>
  );
};

export default Modal;
