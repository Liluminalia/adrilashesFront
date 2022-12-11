import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import styles from './layout.module.css';
export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header></Header>
            <main className={styles.main}>{children}</main>
            <Footer></Footer>
        </>
    );
}
