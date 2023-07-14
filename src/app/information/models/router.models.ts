export const Routes= {
    CHARACTERS:{
        path:"information/charactes",
        name:"characters"
    },
    LOCATIONS:{
        path:"information/locations",
        name:"location"
    },
    HOME:{
        path:"/",
        name:"home"
    }
}
export interface Route{
    path: string,
    name:string
}