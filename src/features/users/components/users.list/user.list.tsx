/* eslint-disable jsx-a11y/anchor-is-valid */

import { UserI } from '../../models/users';
import { UserItem } from '../user.item/user.item';
import styles from './user.list.module.css';
export function UserList({ item }: { item: Array<UserI> }) {
    const title = 'Citar';

    return (
        <section className="userlist">
            <div className="userlist__title">
                <h2 className="userlist__titulo">{title}</h2>
            </div>
            <div className="userlist__container">
                <ul className={styles.userlist__container}>
                    {item.map((item: UserI) =>
                        item.appointments.length > 0 ? (
                            <>
                                <UserItem
                                    key={Math.random() * 10 + item.id}
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
