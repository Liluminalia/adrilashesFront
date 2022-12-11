import styles from './footer.module.css';

export function Footer() {
    return (
        <>
            <footer className="footer">
                <section>
                    <h1 className={styles.footer__title}>Adriana Salles</h1>
                    <p className={styles.footer__info}>
                        Soy Adriana Salles, he realizado varios cursos de
                        cuidado estetico facial, certificados y con titulo. Me
                        dedico a realizarlos a domicilio.
                    </p>
                    <div className={styles.footer__social}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png"
                            alt="imagen de logo de twitter"
                            width={21}
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                            alt="imagen de logo de instagram"
                            width={21}
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                            alt="imagen de logo de gmail"
                            width={21}
                        />
                    </div>
                </section>
            </footer>
        </>
    );
}
