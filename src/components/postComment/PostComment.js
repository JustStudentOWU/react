export default function PostComment({item}) {
    return (
        <div className={'post-comment'}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.body}</p>
            <p>{item.email}</p>
        </div>
        )
     }
