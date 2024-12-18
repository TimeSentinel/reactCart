/* Contact Page
################################### Restaurant Functional Module ###################################
Main Pages
/src/pages/Contact/index.tsx    ::: Contact Us page
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import "src/pages/pages.css"

function Contact() {

    return (
        <>
            <div className="mainPage background-light-shade text-dark-color border-medium-color">
                <div className="bodyHead">
                    <h2 className=" text-center text-red-700 font-bold underline">Under Construction</h2>
                    <h1>Contact Us Page</h1>
                    <p>
                        Fill in the fields below to get in touch with us.
                        <br/>
                    </p>
                    <br/>
                </div>
                <hr className="hrDivider  border-medium-color"/>
                <div className="bodyMain">
                    <h2>Sub-heading</h2>
                    <p>We look forward to hearing from you.</p>
                    <br/>
                </div>
                <hr className="hrDivider  border-medium-color"/>
                <div className="bodyFoot">
                    <h3>Thanks!</h3>
                </div>
            </div>

        </>
    )
}

export default Contact

