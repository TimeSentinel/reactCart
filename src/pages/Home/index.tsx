/* Home Page
################################### Restaurant Functional Module ###################################
Main Pages
/src/pages/Home/stateReducers.tsx    ::: Home Page
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import "src/pages/pages.css"
import diningRoom from "/public/images/diningroom1.jpg"

function Home() {


    return (
        <div className="mainPage background-light-color text-dark-color border-medium-color">
            <div>
                <div className="bodyHead">
                    <h1>Delectorium Family Restaurant</h1>
                    <h2>Fine dishes from around the world!</h2>
                </div>
                <hr className="hrDivider border-medium-color"/>
                <div className="bodyMain">
                    <h2>We are new! </h2>
                    <span className="quote text-medium-color">and always will be!</span>
                    <p>We travel the world looking for new dishes. We don't mean that we scour the internet for worldly
                        recipes, we really love to travel and cooking is our second passion. </p>
                    <br/>
                    <div className="imageCard border-soft-color">
                        <img src={diningRoom} alt="dining room" />
                        <br/>
                        <p>Our beautiful dining room in Vancouver, WA.</p>
                    </div>
                </div>
                <hr className="hrDivider border-medium-color"/>
                <div className="bodyFoot">
                    <h3 className="text-dark-color">Don't be a stranger!</h3>
                    <p className="quote text-medium-color">
                        Our goal is to make every customer feel like family. We want you to feel welcome and to keep
                        coming back for more. Every month or so, we will add new recipes and replace less popular ones.
                        Feel free to let us know what you love and what you feel could be improved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home

