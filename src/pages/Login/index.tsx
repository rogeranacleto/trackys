import { LoginForm } from "@/components/login-form"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export function Login(){

useEffect(() => {
    AOS.init({
        once: true,
        offset: 50
    })
},[])

    return(
        <div>
            <div data-aos="zoom-in" data-aos-duration="1000" className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-sm">
                    <LoginForm/>
                </div>
            </div>
        </div>
    )
}