import {useRouter} from "next/router";

function Header(){
    const router = useRouter();
    return(
        <header>
            <img
                src={'logoMinisterio.png'}
                height={'110px'}
                alt={'Logo ministerio de defensa'}
                onClick={()=>router.push('/')}
                style={{
                    padding:'5px 5px 5px 12px',
                }}
            />
        </header>
    )
}
export default Header;