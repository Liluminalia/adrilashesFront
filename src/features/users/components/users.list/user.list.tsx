/* eslint-disable jsx-a11y/anchor-is-valid */

import { useUsersList } from '../../hooks/users.list/useUsersList';
import { UserI } from '../../models/users';
import { UserItem } from '../user.item/user.item';

export function UserList() {
    const title = 'Citar';
    const { users } = useUsersList();

    return (
        <section className="userlist">
            <div className="userlist__title">
                <h2 className="userlist__titulo">{title}</h2>
            </div>
            <div className="userlist__container">
                <ul className="userlist__list">
                    {users.map((item: UserI) =>
                        item.appointments.length > 0 ? (
                            <>
                                <UserItem
                                    key={item.id + 50}
                                    item={item}
                                ></UserItem>
                            </>
                        ) : (
                            <></>
                        )
                    )}
                </ul>
            </div>
        </section>
    );
}
