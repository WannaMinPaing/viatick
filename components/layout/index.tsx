'use client';

import { memo } from "react";
import Navbar from "./navbar";
import Footer from "../footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar/>
            { children }
            <Footer/>
        </div>
    )
}

export default memo(Layout);