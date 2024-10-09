import style from "./service.module.css"
import Link from "next/link"

const ServicesPage = () => {
    return(
        <div><h1 className={style.heading}>This is a Service Page</h1>
        <Link href="/services/web-development" target="_blank" className={style.link}>web-development</Link>
        </div>
        
    )
}

export default ServicesPage