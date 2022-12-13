import { UserList } from '../../../../../features/users/components/users.list/user.list';
import { useUsersList } from '../../../../../features/users/hooks/users.list/useUsersList';

function AppointmentsPage() {
    const { users } = useUsersList();
    return (
        <div className="main">
            <UserList item={users}></UserList>
        </div>
    );
}

export default AppointmentsPage;
