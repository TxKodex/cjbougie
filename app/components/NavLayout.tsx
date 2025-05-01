import { Link, Outlet } from "@remix-run/react";

export default function NavLayout() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__top">
          <p className="navbar__top__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="navbar__bottom">
          <div className="navbar__bottom__boxes" id="navbar_box_00">
            <div className="navbar__bottom__boxes__menu">
              <img
                src="/icones/menu.png"
                alt="Menu button"
                width="25"
                className="navbar__bottom__boxes__menuImage"
              />
              <p className="navbar__bottom__boxes__menuText">Menu</p>
            </div>
          </div>
          <div className="navbar__bottom__boxes" id="navbar_box_01">
            <Link to="/" className="navbar__bottom__boxes__center">
              <h1 className="navbar__bottom__boxes__centerTitle">
                C&J Bougies
              </h1>
              <p className="navbar__bottom__boxes__centerSubtitle">C&J</p>
            </Link>
          </div>
          <div className="navbar__bottom__boxes__center"></div>
          <div className="navbar__bottom__boxes" id="navbar_box_02">
            <div className="navbar__bottom__boxes__icones">
              <img
                src="/icones/search.png"
                alt="Search button"
                width="25"
                className="navbar__bottom__boxes__iconesButton"
                id="navbar_icone_search"
              />
              <Link to="/login" className="navbar__bottom__boxes__iconesButton">
                <img
                  src="/icones/user.png"
                  alt="Profil button"
                  width="25"
                  className="navbar__bottom__boxes__iconesButton"
                  id="navbar_icone_user"
                />
              </Link>
              <img
                src="/icones/cart.png"
                alt="Cart button"
                width="25"
                className="navbar__bottom__boxes__iconesButton"
                id="navbar_icone_cart"
              />
              <span className="navbar__bottom__boxes__iconesSpan">15</span>
            </div>
          </div>
        </div>
      </nav>
      <main className="app-content">
        <Outlet />
      </main>
      <footer>
        <div className="footer">
          <div className="footer__guarantees__boxes">
            <div className="footer__guarantees__box">
              <h3 className="footer__guarantees__title">PAIMENT SÉCURISÉ</h3>
              <p className="footer__guarantees__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, cumque.
              </p>
            </div>
            <div className="footer__guarantees__box">
              <h3 className="footer__guarantees__title">LIVRAISON OFFERTE</h3>
              <p className="footer__guarantees__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, cumque.
              </p>
            </div>
            <div className="footer__guarantees__box">
              <h3 className="footer__guarantees__title">SAV RÉACTIF</h3>
              <p className="footer__guarantees__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, cumque.
              </p>
            </div>
            <div className="footer__guarantees__box">
              <h3 className="footer__guarantees__title">
                POLITIQUE ANTI-CASSE
              </h3>
              <p className="footer__guarantees__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, cumque.
              </p>
            </div>
          </div>
          <div className="footer__other">
            <div className="footer__other__boxes">
              <h3 className="footer__other__title">À PROPOS</h3>
              <p className="footer__other__text">Mentions légales</p>
              <p className="footer__other__text">
                Politique de confidentialité
              </p>
              <p className="footer__other__text">CGV</p>
            </div>
            <div className="footer__other__boxes">
              <h3 className="footer__other__title">CONTACT</h3>
              <p className="footer__other__text">Contact</p>
              <p className="footer__other__text">FAQ</p>
            </div>
          </div>
          <div className="footer__sitemakersign">
            <p className="footer__sitemakername">TxKode</p>
          </div>
        </div>
      </footer>
    </>
  );
}
