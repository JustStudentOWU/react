import User from "../user/User";

export default function Users({item, findUser}) {
    return (
        <div>
            {
                item.map(value => <User item = {value} key= {value.id} findUser = {findUser}/>)
            }
        </div>
        )
     }
