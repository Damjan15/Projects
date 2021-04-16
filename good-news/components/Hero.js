import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import heroStyles from "../styles/Hero.module.css";

const Hero = () => {
    return (
        <div className={heroStyles.hero} style={{ backgroundImage: `url("https://static.reuters.com/resources/r/?m=02&d=20210416&t=2&i=1558793738&r=LYNXMPEH3F1C5&w=800")`}}>
            <div className={heroStyles.content}>
                <span className={heroStyles.source}>Reuters</span>
                <h1 className={heroStyles.title}>Wall Street Week Ahead: Tech retakes market lead as investors eye yields, earnings</h1>
                <p className={heroStyles.description}>NEW YORK (Reuters) - U.S. technology and growth stocks have taken the markets reins in recent weeks, pausing a rotation into value shares as investors assess the trajectory of bond yields and upcomin…</p>
                <a href="/" className={heroStyles.btn}>Show More</a>
            </div>
        </div>
    )
}

export default Hero
