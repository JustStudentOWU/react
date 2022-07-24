import Post from "../post/Post";

export default function Posts({item, findPost}) {
    return (
        <div>
            {item.map(value => <Post key = {value.id}
                                     item = {value}
                                     findPost = {findPost}
            />)}
        </div>
        )
     }
