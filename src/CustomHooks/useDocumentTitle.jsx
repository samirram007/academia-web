import { useEffect, } from "react"

 const useDocumentTitle = (param) => {
    useEffect(()=>{
        document.title = param===''?import.meta.env.VITE_APP_NAME: `${import.meta.env.VITE_APP_NAME} | ${param}` ;
    },[param])

}

export default useDocumentTitle
