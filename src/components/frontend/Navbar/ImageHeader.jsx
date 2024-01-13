import HomeCss from '../../../styles/modules/HomeCss.module.css';
import { LoginForm } from '../elements/Form';



const ImageHeader = () => {
    return (
        <div className={`${HomeCss.headerBg} overflow-hidden py-12 px-8`}>
            <div className='grid grid-cols-2 gap-4'>
                <div>

                </div>
                <div>
                    <div className={`${HomeCss.overlayBg} w-80 py-6 px-6 rounded-lg float-end`}>
                        <LoginForm />
                    </div>
                </div>

            </div>
        </div>
    )
}




export default ImageHeader;