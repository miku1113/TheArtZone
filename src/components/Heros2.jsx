import pic1 from '../assets/pic2.png'
import './css/module.heros.css'

const Heros2 = () => {
    return (
        <section style={{ background: 'white' }}>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row align-items-center g-5">
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">PENCIL SKETCH</h1>
                        <p className="lead">A visual art form using graphite or charcoal pencils on paper. It emphasizes line work, shading, and texture to depict subjects in shades of gray. It's versatile, capturing portraits, landscapes, and more with realism and emotion.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="MjsubscribeBtn-outline py-2 btn-lg px-4">SEE MORE ARTS</button>
                        </div>
                    </div>
                    <div className="poster col-10 col-sm-8 col-lg-6 mx-auto">
                        <img src={pic1} className="d-block img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Heros2;