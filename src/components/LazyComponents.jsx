import {lazy} from "react"



export const LazyNavbar = lazy(()=> import("./Navbar"))
export const LazyAboutUs = lazy(()=> import("./AboutUs"))
export const LazyProjects = lazy(()=> import("./Projects"))
export const LazyProgressBar = lazy(()=> import("./ProgressBar"))
export const LazySkills = lazy(()=> import("./Skills"))
export const LazyContactMe = lazy(()=> import("./ContactMe"))