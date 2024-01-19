import useDocumentTitle from "../../CustomHooks/useDocumentTitle";
function About() {
    useDocumentTitle("About")

    return <>
        <h1 className="w-full h-32 bg-gradient-to-r from-red-500 to-blue-500   ">Your Gradient Text</h1>
    </>;
}

export default About;
