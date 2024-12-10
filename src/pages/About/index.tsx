/* About Page
################################### Restaurant Functional Module ###################################
Main Pages
/src/pages/About/index.tsx    ::: About Us page
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import "src/pages/pages.css"

function About() {


    return (
        <>
            <div className="mainPage">
                <div className="bodyHead">
                    <h2 className=" text-center text-red-700 font-bold underline">Under Construction</h2>
                    <h1>About Us Page</h1>
                    <p>
                        This is the story of us; how we came to be, what our goals are, and why you want to visit. <br/>
                    </p>
                    <br/>
                </div>
                <hr className="hrDivider"/>
                <div className="bodyMain">
                    <h2>Sub-heading</h2>
                    <p>We have a lot to say, so stay tuned!</p>
                    <br/>
                </div>
                <hr className="hrDivider"/>
                <div className="bodyFoot">
                    <h3>This is the bottom of our page!</h3>
                </div>
            </div>

        </>
    )
}

export default About;

