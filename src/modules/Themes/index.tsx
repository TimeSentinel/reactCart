/* Themes Main Component
################################### Restaurant Functional Module ###################################
Themes
/modules/Themes/index.tsx    ::: CSS Themes; requires theme packages
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import {useEffect, useState} from "react";
import './default.css'
import themes from "./themes.json"


function ThemeSelector(): Element {

    const [theme, setTheme] = useState({
        uuid: "",
        name: "",
        component: "",
        path: "",
    })

    useEffect(() => {
        themes.data.map((item) => {
            if (item.name === "Default") {
                setTheme({
                    uuid: item.uuid,
                    name: item.name,
                    component: item.component,
                    path: item.path,
                });
            }
        })
    }, [])

    const [currentJson, setCurrentJson] = useState({
        name: "",
        colors: [],
        settings: [],
        root: []
    })

    const [error, setError] = useState({})

    const [specificTheme, setSpecificTheme] = useState([{
        name: "",
        colors: {},
        settings: {},
        root: {}
    }])

    useEffect(() => {
        themes.data.map(async (item) => {
            fetch(item.path + "/theme.json")
                .then(res => res.json())
                .then(data => setCurrentJson(data))
                .catch(error => setError(error));``
            // import(item.path + "/theme.json")
            console.log("Jake, from StateFarm" + item.path + "/theme.json")
            setSpecificTheme([...specificTheme, {
                name: item.name,
                colors: currentJson.colors, settings: currentJson.settings, root: currentJson.root
            }])
            console.log("baby Bacon: " + currentJson.name)
        })
    }, [])


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

    useEffect(() => {
        console.log("count Spacula: " + theme.name);
        console.log("raisons: " + specificTheme[0].colors);
// const css = {
// ------------------------- ROOT -------------------------
// .logo { backgroundImage: url(logo); }

// ---------------------- BORDER COLORS ----------------------
// .border-bright-color { border-color: specificTheme.colors.light-color;}
// .border-light-color { border-color: specificTheme.colors.light-color;}
// .border-soft-color { border-color: specificTheme.colors.soft-color;}
// .border-medium-color { border-color: specificTheme.colors.medium-color;}
// .border-dark-color { border-color: specificTheme.colors.dark-color;}
// .border-very-dark-color { border-color: specificTheme.colors.very-dark-color;}
// .border-light-shade { border-color: specificTheme.colors.light-shade;}
// .border-medium-shade { border-color: specificTheme.colors.medium-shade;}
// .border-dark-shade { border-color: specificTheme.colors.dark-shade;}
// .border-very-dark-shade { border-color: specificTheme.colors.very-dark-shade;}
// .border-ok-color { border-color: specificTheme.colors.ok-color;}
// .border-alert-color { border-color: specificTheme.colors.alert-color;}
// .border-highlight-color { border-color: specificTheme.colors.highlight-color; }

// ---------------------- BACKGROUND COLORS ----------------------
// .background-bright-color { background-color: specificTheme.colors.light-color;}
// .background-light-color { background-color: specificTheme.colors.light-color;}
// .background-soft-color { background-color: specificTheme.colors.soft-color;}
// .background-medium-color { background-color: specificTheme.colors.medium-color;}
// .background-dark-color { background-color: specificTheme.colors.dark-color;}
// .background-very-dark-color { background-color: specificTheme.colors.very-dark-color;}
// .background-light-shade { background-color: specificTheme.colors.light-shade;}
// .background-medium-shade { background-color: specificTheme.colors.medium-shade;}
// .background-dark-shade { background-color: specificTheme.colors.dark-shade;}
// .background-very-dark-shade { background-color: specificTheme.colors.very-dark-shade;}
// .background-ok-color { background-color: specificTheme.colors.ok-color;}
// .background-alert-color { background-color: specificTheme.colors.alert-color;}
// .background-highlight-color { background-color: specificTheme.colors.highlight-color;}

// ---------------------- TEXT COLORS ----------------------
// .text-bright-color { color: specificTheme.colors.light-color;}
// .text-light-color { color: specificTheme.colors.light-color;}
// .text-soft-color { color: specificTheme.colors.soft-color;}
// .text-medium-color { color: specificTheme.colors.medium-color;}
// .text-dark-color { color: specificTheme.colors.dark-color;}
// .text-very-dark-color { color: specificTheme.colors.very-dark-color;}
// .text-light-shade { color: specificTheme.colors.light-shade;}
// .text-medium-shade { color: specificTheme.colors.medium-shade;}
// .text-dark-shade { color: specificTheme.colors.dark-shade;}
// .text-very-dark-shade { color: specificTheme.colors.very-dark-shade;}
// .text-ok-color { color: specificTheme.colors.ok-color;}
// .text-alert-color { color: specificTheme.colors.alert-color;}
// .text-highlight-color { color: specificTheme.colors.highlight-color;}
    })


    return (
        <>
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
            </div>
            <div></div>
            <style>{}</style>
        </>
    )
}

export default ThemeSelector;