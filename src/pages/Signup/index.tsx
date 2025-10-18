import { SignupForm } from "@/components/signup-form"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export function Signup(){

useEffect(() => {
    AOS.init({  
        once: true,
        offset: 50
    })
},[])

    return(
        <div data-aos="zoom-in" data-aos-duration="1000" className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <section className="w-full max-w-sm">
                <SignupForm/>
            </section>
        </div>
    )
}