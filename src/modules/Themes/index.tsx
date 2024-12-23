/* Themes Main Component
################################### Restaurant Functional Module ###################################
Themes
/modules/Themes/index.tsx    ::: CSS Themes; requires theme packages
REQ: Vite-React.js+TypeScript, react-router-dom, react-hot-toast,
(c)2024 Lance Stubblefield
####################################################################################################
*/

import React, {useContext, useEffect, useRef, useState} from "react";
import {ctx} from "src/context";
import './themes.css';

// --------------------------------------
//region vv---------- INTERFACES ----------vv
export interface ThemeInterface {
    uuid: string,
    name: string,
    text: string,
    background: string
}

interface themeListInterface {
    data: [{
        uuid: string,
        name: string,
        text: string,
        background: string,
        path: string
    }]
}

interface themeColorsInterface {
    lightColor: string,
    softColor: string,
    mediumColor: string,
    darkColor: string,
    veryDarkColor: string,
    brightColor: string,
    okColor: string,
    highlightColor: string,
    alertColor: string,
    lightShade: string,
    mediumShade: string,
    darkShade: string,
    veryDarkShade: string,
}

interface themeSettingsInterface {
    logoUrl: string,
}

interface themeRootInterface {
    body: string,
    h1: string,
    h2: string,
    h3: string,
    h4: string,
    h5: string,
    font: string,
    fontSize: string,
    button: string,
    p: string,
}

interface themeCatalogInterface {
    theme: string,
    colors: themeColorsInterface,
    settings: themeSettingsInterface,
    root: themeRootInterface,
}

//endregion
// --------------------------------------

function ThemeSelector(): React.JSX.Element {
    // --------------------------------------
    //region vv---------- INITIALIZATION ----------vv
    const cssStyle = useContext(ctx).state.cssStyle;
    const cssDispatch = useContext(ctx).dispatch;
    const cssName = useContext(ctx).localState.cssName;
    const localDispatch = useContext(ctx).localDispatch

    const errorMsg = useRef<string>("");
    const [curTheme, setCurTheme] = useState({} as themeCatalogInterface);
    const themes = useRef<themeListInterface>({
            data: [{
                uuid: "",
                name: "",
                text: "",
                background: "",
                path: ""
            }]
        });
    //endregion
    // --------------------------------------

    // useEffect(() => { // loading themes from cssName.name
    //     themes.data.map((item) => {
    //         if (item.name === cssName.name) {
    //             localDispatch({
    //                 type: "CSS_NAME",
    //                 payload: {
    //                     uuid: item.uuid,
    //                     name: item.name,
    //                     text: item.text,
    //                     background: item.background
    //                 },
    //             });
    //         }
    //     })
    // }, []) // loading themes from cssName.name

    useEffect(() => { // test load cssName.name
        fetch("/themes/themes.json")
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                localDispatch({
                    type: "CSS_NAME",
                    payload: {
                        uuid: themes.current.data.find((item) => item.uuid === cssName.uuid)?.uuid,
                        name: themes.current.data.find((item) => item.uuid === cssName.uuid)?.name,
                        text: themes.current.data.find((item) => item.uuid === cssName.uuid)?.text,
                        background: themes.current.data.find((item) => item.uuid === cssName.uuid)?.background
                    }
                })
                themes.current.data = data.data;
                return data
            })
            .catch(error => errorMsg.current = "themes/themes.json: " + error.message)
    }, []) // test load cssName.name

    useEffect(() => { // loading css from themeCatalog and setting <css>
        if (themes.current.data !== undefined) {
            const curPath =
                themes.current.data.find((item) => item.name === cssName.name)?.path
                ?? "/themes/default"
            console.log("curPath: " + curPath)
            fetch(curPath + "/theme.json")
                .then(res => res.json())
                .then(data => setCurTheme(data))
                .catch(error => errorMsg.current = "<name>/theme.json: " + error.message);
            if (curTheme.root === undefined) return;

            const css =
                // --------------------------------------
                //region vv------ Current Style Set <css> ------vv
                // ---------------------- Root ----------------------
                `body { ${curTheme.root.body};
                 font-family: ${curTheme.root.font};
                 font-size: ${curTheme.root.fontSize};
                 } ` +
                `h1 { ${curTheme.root.h1}; } ` +
                `h2 { ${curTheme.root.h2}; } ` +
                `h3 { ${curTheme.root.h3}; } ` +
                `h4 { ${curTheme.root.h4}; } ` +
                `h5 { ${curTheme.root.h5}; } ` +
                `button { ${curTheme.root.button}; } ` +
                `p { ${curTheme.root.p}; } ` +
                // ------------------------- Settings -------------------------
                `.logo { background-image: url(${curTheme.settings.logoUrl}); }` +
                // ---------------------- Border Colors ----------------------
                `.border-bright-color { border-color: ${curTheme.colors.brightColor} }` +
                `.border-light-color { border-color: ${curTheme.colors.lightColor} ;} ` +
                `.border-soft-color { border-color: ${curTheme.colors.softColor} ;} ` +
                `.border-medium-color { border-color: ${curTheme.colors.mediumColor} ;} ` +
                `.border-dark-color { border-color: ${curTheme.colors.darkColor} ;} ` +
                `.border-very-dark-color { border-color: ${curTheme.colors.veryDarkColor} ;} ` +
                `.border-light-shade { border-color: ${curTheme.colors.lightShade} ;} ` +
                `.border-medium-shade { border-color: ${curTheme.colors.mediumShade} ;} ` +
                `.border-dark-shade { border-color: ${curTheme.colors.darkShade} ;} ` +
                `.border-very-dark-shade { border-color: ${curTheme.colors.veryDarkShade} ;} ` +
                `.border-ok-color { border-color: ${curTheme.colors.okColor} ;} ` +
                `.border-alert-color { border-color: ${curTheme.colors.alertColor} ;} ` +
                `.border-highlight-color { border-color: ${curTheme.colors.highlightColor} ; } ` +
                // ---------------------- BACKGROUND COLORS ----------------------
                `.background-bright-color { background-color: ${curTheme.colors.brightColor};} ` +
                `.background-light-color { background-color: ${curTheme.colors.lightColor};} ` +
                `.background-soft-color { background-color: ${curTheme.colors.softColor};} ` +
                `.background-medium-color { background-color: ${curTheme.colors.mediumColor};} ` +
                `.background-dark-color { background-color: ${curTheme.colors.darkColor};} ` +
                `.background-very-dark-color { background-color: ${curTheme.colors.veryDarkColor};} ` +
                `.background-light-shade { background-color: ${curTheme.colors.lightShade};} ` +
                `.background-medium-shade { background-color: ${curTheme.colors.mediumShade};} ` +
                `.background-dark-shade { background-color: ${curTheme.colors.darkShade};} ` +
                `.background-very-dark-shade { background-color: ${curTheme.colors.veryDarkShade};} ` +
                `.background-ok-color { background-color: ${curTheme.colors.okColor};} ` +
                `.background-alert-color { background-color: ${curTheme.colors.alertColor};} ` +
                `.background-highlight-color { background-color: ${curTheme.colors.highlightColor};} ` +
                // ---------------------- TEXT COLORS ----------------------
                `.text-bright-color { color: ${curTheme.colors.brightColor};} ` +
                `.text-light-color { color: ${curTheme.colors.lightColor};} ` +
                `.text-soft-color { color: ${curTheme.colors.softColor} ;} ` +
                `.text-medium-color { color: ${curTheme.colors.mediumColor};} ` +
                `.text-dark-color { color: ${curTheme.colors.darkColor};} ` +
                `.text-very-dark-color { color: ${curTheme.colors.veryDarkColor};} ` +
                `.text-light-shade { color: ${curTheme.colors.lightShade};} ` +
                `.text-medium-shade { color: ${curTheme.colors.mediumShade};} ` +
                `.text-dark-shade { color: ${curTheme.colors.darkShade};} ` +
                `.text-very-dark-shade { color: ${curTheme.colors.veryDarkShade};} ` +
                `.text-ok-color { color: ${curTheme.colors.okColor};} ` +
                `.text-alert-color { color: ${curTheme.colors.alertColor};} ` +
                `.text-highlight-color { color: ${curTheme.colors.highlightColor};} `;
            //endregion
            // --------------------------------------
            cssDispatch({
                type: "UPDATE_CSS",
                payload: css
            })
        }
    }, [cssName, curTheme]);  // loading css from themeCatalog and setting <css>

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {  // React.ChangeEvent<HTMLSelectElement>
        themes.current.data.map((item) => {
            if (item.uuid === e.target.value) {                              // e.target.value
                localDispatch({
                    type: "CSS_NAME",
                    payload: {
                        uuid: item.uuid,
                        name: item.name,
                        text: item.text,
                        background: item.background
                    },
                });
            }
        })
    }

    return (
        <>
            <div className="ThemeSelector">
                <select onChange={(e) => handleChange(e)}
                        value={cssName.uuid}
                        style={{
                            backgroundColor: cssName.background,
                            color: cssName.text,
                        }}
                >
                    {
                        themes.current.data.map((item) => {
                            return (
                                <option
                                    key={item.uuid}
                                    value={item.uuid}
                                >
                                    {item.name}
                                </option>)
                        })
                    }
                </select>
            </div>
            <div className="error"
                 style={{display: errorMsg.current !== "" ? 'block' : 'none'}}>{errorMsg.current}</div>
            <style>{cssStyle !== "" && cssStyle}</style>
        </>
    )
}

export default ThemeSelector;