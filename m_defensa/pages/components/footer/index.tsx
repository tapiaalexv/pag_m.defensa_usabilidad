import {useRouter} from "next/router";

function Footer() {
    const router = useRouter();
    return (
        <footer>
            {/*Logo Gobierno - Extremo Izquierdo*/}
            <img
                src={'logoGobierno.png'}
                height={'130px'}
                alt={'Logo ministerio de defensa'}
                onClick={() => router.push('/')}
                style={{
                    padding: '5px 5px 5px 12px',
                }}
            />
            {/*Enlaces y direccion - Extremo Derecho*/}
            <div
                style={{
                    marginRight: '15px'
                }}
            >
                {/*Enlaces a redes sociales*/}
                <div style={{display: 'flex', justifyContent:'space-between', margin: '5px 0 10px 0'}}>
                    <img
                        src={'facebook.png'}
                        alt={'Facebook - Ministerio de trabajo'}
                        height={'50px'}
                        onClick={() => window.open('https://www.facebook.com/DefensaEcuador')}
                    />
                    <img
                        src={'instagram.png'}
                        alt={'Instagram - Ministerio de trabajo'}
                        height={'50px'}
                        onClick={() => window.open('https://www.instagram.com/defensa_ec/?hl=es')}
                    />
                    <img
                        src={'twitter.png'}
                        alt={'Twitter - Ministerio de trabajo'}
                        height={'50px'}
                        onClick={() => window.open('https://twitter.com/defensaec')}
                    />
                    <img
                        src={'youtube.png'}
                        alt={'YouTube - Ministerio de trabajo'}
                        height={'50px'}
                        onClick={() => window.open('https://www.youtube.com/user/DefensaEcuador')}
                    />
                </div>
                {/*Parrafo direccion*/}
                <p style={{lineHeight: '20px', color: "white", textAlign: 'right', marginBottom:'5px'}}>
                    Calle la Exposición S4-71 y Benigno Vela<br/>
                    Código Postal: 170403 / Quito - Ecuador<br/>
                    Teléfono: 593-2 298-3200 / 593-2 295-1951
                </p>
            </div>
        </footer>
    )
}

export default Footer;