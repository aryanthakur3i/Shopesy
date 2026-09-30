import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () =>{
    // get the current url path
    const {pathname} = useLocation()

    useEffect(() => {
        // scroll to the top whenever the route change
        window.scrollTo(0,0)
    },[pathname])

    return null
}

export default ScrollToTop