const UserInfoTable = ({user}) => {
    console.log("user: ",user)
    return (

    <table className="userTable">
        <thead>
            <tr>
        <th>Nombre</th>
            <th>Apellido</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            </tr>
        </tbody>



    </table>


)
    }
export default UserInfoTable