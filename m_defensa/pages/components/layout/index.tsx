import Header from "../header";
import Footer from "../footer";
import {ReactNode} from "react";

type Props = {
    children?: ReactNode;
}

function Layout({children}: Props) {
    return (
        <div className={'main'}>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;