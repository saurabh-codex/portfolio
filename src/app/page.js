import { Header } from "@/component/header";
import Footer from "@/component/footer"
import About from "./About/page";
import Hero from "./hero/page";

export default function Home(){
    return(
        <div className="flex flex-col" data-theme= "light">
            <Header/>
            <Hero/>
            <About/>
            <Footer/>
        </div>
    )
}
