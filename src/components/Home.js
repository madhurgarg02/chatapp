import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './ChatFeed';
import LoginForm from './LoginForm';

import '../App.css';

const Home = () => {

  if (!localStorage.getItem('username') && window.location.pathname !=="/about") return (

  <LoginForm />  
   

    );

    return(
<ChatEngine
      height="100vh"
      projectID="7bb9ba34-05d3-4577-9164-b8fe79d687a5"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    );
 
}

export default Home;