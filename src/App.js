import './App.css';
import {Album, Comment, Post, Todo, User} from "./components";

function App() {
  return (
    <div >
      <User />
      <Post />
      <Comment />
      <Album />
      <Todo />
    </div>
  );
}

export default App;
