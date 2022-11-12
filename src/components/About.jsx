import Aside from "./Aside"
import Footer from "./Footer"
export default function About(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-9">
                    <section>

                    </section>
                </div>
                <div className="col-sm-12 col-md-3">
                    <Aside></Aside>
                </div>
            </div>
            <div className="row">
                <Footer></Footer>
            </div>
        </div>
    )
}