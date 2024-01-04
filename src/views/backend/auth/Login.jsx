import { useSelector } from "react-redux";
import { LoginCard } from "../../../components/backend/element/Cards";
import LoginCss from '../../../styles/modules/Login.module.css';
import Footer from "../../../components/backend/footer/Footer";



const Login = () => {
    const userData = useSelector(state => state.tokenReducer);
    console.log(userData, 'data');
    return (
        <div className={`${LoginCss.loginBack}`}>
            <div className={`${LoginCss.loginImg}`}>
                <div className="pt-12 py-6 px-14">
                    <span className="p-4 text-3xl">School</span>
                </div>
                <div className="grid grid-cols-2 gap-10">
                    <div>

                    </div>
                    <div className="py-8">
                        <LoginCard />
                    </div>
                </div>

            </div>
            <Footer />
        </div>


    )
}



export default Login;