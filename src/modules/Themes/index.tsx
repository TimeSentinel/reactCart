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
                .border-bright-color: specificTheme.colors.light-color;
                .border-light-color: specificTheme.colors.light-color;
                .border-soft-color: specificTheme.colors.soft-color;
                .border-medium-color: specificTheme.colors.medium-color;
                .border-dark-color: specificTheme.colors.dark-color;
                .border-very-dark-color: specificTheme.colors.very-dark-color;
                .border-light-shade: specificTheme.colors.light-shade;
                .border-medium-shade: specificTheme.colors.medium-shade;
                .border-dark-shade: specificTheme.colors.dark-shade;
                .border-very-dark-shade: {
            border-color: var(--DarkBlue-very-dark-shade);
        }

    .border-ok-color {
            border-color: var(--DarkBlue-ok-color);
        }

    .border-alert-color {
            border-color: var(--DarkBlue-alert-color);
        }

    .border-highlight-color {
            border-color: var(--DarkBlue-highlight-color);
        }

        /* ------------------------------ BACKGROUND COLORS ------------------------------ */

    .background-bright-color {
            background-color: var(--DarkBlue-bright-color)
        }

    .background-light-color {
            background-color: var(--DarkBlue-light-color);
        }

    .background-soft-color {
            background-color: var(--DarkBlue-soft-color);
        }

    .background-medium-color {
            background-color: var(--DarkBlue-medium-color);
        }

    .background-dark-color {
            background-color: var(--DarkBlue-dark-color);
        }

    .background-very-dark-color {
            background-color: var(--DarkBlue-very-dark-color);
        }

    .background-light-shade {
            background-color: var(--DarkBlue-light-shade);
        }

    .background-medium-shade {
            background-color: var(--DarkBlue-medium-shade);
        }

    .background-dark-shade {
            background-color: var(--DarkBlue-dark-shade);
        }

    .background-very-dark-shade {
            background-color: var(--DarkBlue-very-dark-shade);
        }

    .background-ok-color {
            background-color: var(--DarkBlue-ok-color);
        }

    .background-alert-color {
            background-color: var(--DarkBlue-alert-color);
        }

    .background-highlight-color {
            background-color: var(--DarkBlue-highlight-color);
        }


        /* ------------------------------ FONT COLORS ------------------------------ */

    .text-bright-color {
            color: var(--DarkBlue-bright-color)
        }

    .text-light-color {
            color: var(--DarkBlue-light-color);
        }

    .text-soft-color {
            color: var(--DarkBlue-soft-color);
        }

    .text-medium-color {
            color: var(--DarkBlue-medium-color);
        }

    .text-dark-color {
            color: var(--DarkBlue-dark-color);
        }

    .text-very-dark-color {
            color: var(--DarkBlue-very-dark-color);
        }

    .text-light-shade {
            color: var(--DarkBlue-light-shade);
        }

    .text-medium-shade {
            color: var(--DarkBlue-medium-shade);
        }

    .text-dark-shade {
            color: var(--DarkBlue-dark-shade);
        }

    .text-very-dark-shade {
            color: var(--DarkBlue-very-dark-shade);
        }

    .text-ok-color {
            color: var(--DarkBlue-ok-color);
        }

    .text-alert-color {
            color: var(--DarkBlue-alert-color);
        }

    .text-highlight-color {
            color: var(--DarkBlue-highlight-color);
        }
    }
    }
        }

    }, [theme]);

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