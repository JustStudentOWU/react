export default function User({item, findUser}) {
    return (
        <div>
            {item.id} - {item.name} <button onClick={() => {
                findUser(item.id);
        }}>more info</button>
        </div>
        )
     }
