export default function Aside() {
    return (
        <aside>
            <div className="flex-shrink-0 p-3 bg-white position-sticky">
                <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                    <span className="fs-5 fw-semibold">Restaurante</span>
                </a>
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                            Home
                        </button>
                        <div className="collapse show" id="home-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#desayunos" className="link-dark rounded">Desayunos</a></li>
                                <li><a href="#almuerzos" className="link-dark rounded">Almuerzos</a></li>
                                <li><a href="#cenas" className="link-dark rounded">Cenas</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                            Redes Sociales
                        </button>
                        <div className="collapse" id="dashboard-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded">Instagram</a></li>
                                <li><a href="#" className="link-dark rounded">Facebook</a></li>
                                <li><a href="#" className="link-dark rounded">Twitter</a></li>
                                <li><a href="#" className="link-dark rounded">Youtube</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                            Realizar pedido
                        </button>
                        <div className="collapse" id="orders-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded">Whatsapp</a></li>
                                <li><a href="#" className="link-dark rounded">Rappi</a></li>
                                <li><a href="#" className="link-dark rounded">Didi Food</a></li>
                                <li><a href="#" className="link-dark rounded">iFood</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    );
}