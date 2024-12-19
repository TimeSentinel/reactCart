/* Themes Main Component
################################### Restaurant Functional Module ###################################
Themes
/modules/Themes/index.tsx    ::: CSS Themes; requires theme packages
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/


import {useInsertionEffect, useState} from "react";
import './default.css'
import themes from "./themes.json"


function ThemeSelector(): React.JSX.Element {

    const [theme, setTheme] = useState({
        uuid: "",
        name: "",
        component: "",
        path: "",
    })

    themes.data.map((item) => {
        if (item.name === "Default") {
            setTheme({uuid: item.uuid, name: item.name, component: item.component, path: item.path})
        }
    })

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

    useInsertionEffect(() => {
        import specificTheme from theme.path + "/theme.json";
        console.log(theme.path + "/theme.json");
        const css = {
            // ---------------------- ROOT ----------------------

            // ---------------------- BORDER COLORS ----------------------
            // .border-bright-color: specificTheme.colors.light-color;
            // .border-light-color: specificTheme.colors.light-color;
            // .border-soft-color: specificTheme.colors.soft-color;
            // .border-medium-color: specificTheme.colors.medium-color;
            // .border-dark-color: specificTheme.colors.dark-color;
            // .border-very-dark-color: specificTheme.colors.very-dark-color;
            // .border-light-shade: specificTheme.colors.light-shade;
            // .border-medium-shade: specificTheme.colors.medium-shade;
            // .border-dark-shade: specificTheme.colors.dark-shade;
            // .border-very-dark-shade: specificTheme.colors.very-dark-shade;
            // .border-ok-color: specificTheme.colors.ok-color;
            // .border-alert-color: specificTheme.colors.alert-color;
            // .border-highlight-color: specificTheme.colors.highlight-color;

            // ---------------------- BORDER COLORS ----------------------
            // .border-bright-color: specificTheme.colors.light-color;
            // .border-light-color: specificTheme.colors.light-color;
            // .border-soft-color: specificTheme.colors.soft-color;
            // .border-medium-color: specificTheme.colors.medium-color;
            // .border-dark-color: specificTheme.colors.dark-color;
            // .border-very-dark-color: specificTheme.colors.very-dark-color;
            // .border-light-shade: specificTheme.colors.light-shade;
            // .border-medium-shade: specificTheme.colors.medium-shade;
            // .border-dark-shade: specificTheme.colors.dark-shade;
            // .border-very-dark-shade: specificTheme.colors.very-dark-shade;
            // .border-ok-color: specificTheme.colors.ok-color;
            // .border-alert-color: specificTheme.colors.alert-color;
            // .border-highlight-color: specificTheme.colors.highlight-color;

            // ---------------------- BORDER COLORS ----------------------
            // .border-bright-color: specificTheme.colors.light-color;
            // .border-light-color: specificTheme.colors.light-color;
            // .border-soft-color: specificTheme.colors.soft-color;
            // .border-medium-color: specificTheme.colors.medium-color;
            // .border-dark-color: specificTheme.colors.dark-color;
            // .border-very-dark-color: specificTheme.colors.very-dark-color;
            // .border-light-shade: specificTheme.colors.light-shade;
            // .border-medium-shade: specificTheme.colors.medium-shade;
            // .border-dark-shade: specificTheme.colors.dark-shade;
            // .border-very-dark-shade: specificTheme.colors.very-dark-shade;
            // .border-ok-color: specificTheme.colors.ok-color;
            // .border-alert-color: specificTheme.colors.alert-color;
            // .border-highlight-color: specificTheme.colors.highlight-color;


        }
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
            <style>{css}</style>
        </>
    )
}

export default ThemeSelector;