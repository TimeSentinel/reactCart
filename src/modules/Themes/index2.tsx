/* Themes Main Component
################################### Restaurant Functional Module ###################################
Themes
/modules/Themes/index.tsx    ::: CSS Themes; requires theme packages
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/


import {lazy, useEffect, useState} from "react";
import './default.css'
import themes from "./themes.json"

function ThemeSelector(): React.JSX.Element {
    const [theme, setTheme] = useState({
        uuid: "6c7c7457-399b-4eac-9e8b-f05e477b7601",
        name: "Default",
        component: "ThemeGreen",
        path: "./themes/green",
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        themes.data.map((item) => {
            if (item.uuid === e.target.value) {
                setTheme({
                    uuid: item.uuid,
                    name: item.name,
                    component: item.component,
                    path: item.path,
                })
            }
        })


    }

// #######################################################################################
    // const Component = lazy(() =>
    //     import(theme.path + "/index.tsx").then((module) => ({default: module.MyComponent}))
    // );
    // <Component />
// #######################################################################################

// #######################################################################################
    // const PreFooterPage = lazy(() => import('./prefooter/preFooterPage'));
    // const PreFooterArticle = lazy(() => import('./prefooter/preFooterArticle'));
    //
    // const MyMainComponent = ({ type }) => (
    //     <Suspense fallback="Loading">
    //         {type === 'page' ? <PreFooterPage /> : <PreFooterArticle />}
    //     </Suspense>
    // );
// #######################################################################################


    useEffect(() => {
        lazy(() => import(theme.path + "/theme.css"));
        console.log(theme.path + "/theme.css");
    }, [theme]);

    return (
        <div className="ThemeSelector">

            <select onChange={(e) => handleChange(e)}>
                {
                    themes.data.map((item) => {
                        return (
                            <option key={item.uuid} value={item.uuid}>
                                {item.name}
                            </option>)
                    })
                }
            </select>
            {/*{ <Component/> }*/}
        </div>
    )
}

export default ThemeSelector;