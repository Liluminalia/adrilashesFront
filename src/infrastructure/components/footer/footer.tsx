import styles from './footer.module.css';

export function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <section>
                    <h1 className={styles.footer__title}>Adriana Salles</h1>
                    <p className={styles.footer__info}>
                        Soy Adriana Salles, mi trayectoria comienza con
                        formaciones homologadas y continuadas. Siempre en
                        proceso de aprendizaje para aprender y formarme para
                        darte el mejor servicio. Dentro de la estética integral
                        me especializo en técnicas pestañas,varios tipos de
                        manicura, entre ellas, gel y acrilico Y actualmente en
                        proceso de formación maquillaje profesional, y más
                        ámbitos de la estética integral. ¿Quieres saber más
                        sobre mi técnica y todos nuestros servicios?… Escríbeme!
                        Estaré a tu disposición para cualquier duda.
                    </p>
                    <div className={styles.footer__social}>
                        <a href="https://twitter.com/">
                            <img
                                src="https://es.seaicons.com/wp-content/uploads/2016/03/Twitter-icon-19.png"
                                alt="imagen de logo de twitter"
                                width={35}
                            />
                        </a>
                        <a href="https://www.instagram.com/lashes_adrisape/">
                            <img
                                src="https://cdn.iconscout.com/icon/free/png-256/instagram-1865894-1581910.png"
                                alt="imagen de logo de instagram"
                                width={35}
                            />
                        </a>
                        <a href="mailto:adriana-salles@hotmail.com">
                            <img
                                src="https://cdn.iconscout.com/icon/free/png-256/gmail-2981844-2476484.png"
                                alt="imagen de logo de gmail"
                                width={35}
                            />
                        </a>
                    </div>
                </section>
            </footer>
        </>
    );
}
