/* Themes Main Component
################################### Restaurant Functional Module ###################################
Themes
/modules/Themes/index.tsx    ::: CSS Themes; requires theme packages
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

/*
todo: create dropdown selection list from JSON
todo: use dropdown selection to choose theme component or CSS file
todo: embed this component in footer, header or main tsx file
todo: store selected theme in local storage; retrieve local if exists
 */


import {useEffect, useState} from "react";
import themes from "./themes.json"


interface themeItems {
    uuid: string;
    name: string;
    path: string;
}

function ThemeSelector() {
    const [theme, setTheme] = useState({
        name: "Default",
        file: "./default.css"
    });

    const themeList = themes.data?.map(item => {
        return {
            uuid: item.uuid,
            name: item.name ,
            path: item.cssFile,
        }
    })

    useEffect(() => {
        import(theme.file).then(() => {
            // Styles are loaded
        });
    }, [theme]);

    return (
        <>
        <select onChange={(e) => setTheme(e.target.value)}>
            {
                themeList.map((item) => {
                    return (
                        <option key={item.uuid} value={{name: item.name, path:item.path}}
                                { (item.name === theme.name) && "selected" }
                        >
                            {item.name}
                        </option>)
                })
            }

            >
            {item.name}

        </select>
    {/*code to import correct theme here*/
    }
</>
)
}

export default ThemeSelector;