import { UserList } from '../../../../../features/users/components/users.list/user.list';
import { useUsersList } from '../../../../../features/users/hooks/users.list/useUsersList';
import styles from './appointments.module.css';
function AppointmentsPage() {
    const { users } = useUsersList();
    return (
        <div className={styles.appointments__container}>
            <UserList item={users}></UserList>
        </div>
    );
}

export default AppointmentsPage;
