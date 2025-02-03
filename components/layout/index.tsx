'use client';

import { memo } from "react";
import Navbar from "./navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar/>
            { children }
        </div>
    )
}

export default memo(Layout);