import UserPost from "../userPost/UserPost";

export default function UserPosts({userPosts}) {
    return (
        <div>
            {
                userPosts.map(value => <UserPost key ={value.id} item={value}/>)
            }
        </div>
        )
     }
