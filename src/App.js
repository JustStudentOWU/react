import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import Albums from "./components/albums/Albums";
import Todos from "./components/todos/Todos";

function App() {
  return (
    <div>
      <Users />
      <Posts />
      <Comments />
      <Albums/>
      <Todos />
    </div>
  );
}

export default App;
