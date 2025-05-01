import type { MetaFunction } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Inscription - C&J Bougies" },
];

export default function Login() {
  return (
    <div className="login">
      <h1 className="login__title">Se connecter</h1>
      <h2 className="login__subtitle">
        Veuillez saisir vos identifiants pour vous connecter.
      </h2>
      <Form method="post" className="login__form">
        <div className="login__box">
          <input
            type="email"
            name="Email"
            id="email"
            placeholder="Email"
            className="login__input"
            required
          />
        </div>
        <div className="login__box">
          <input
            type="password"
            name="Mot de passe"
            id="mdp_login"
            placeholder="Mot de passe"
            className="login__input"
            required
          />
        </div>

        <button type="submit" className="login__button">
          SE CONNECTER
        </button>
      </Form>
      <p className="login__text">
        Vous n'avez pas encore de ?
        <Link to="/register" className="login__link">
          Inscrivez-vous
        </Link>
      </p>
    </div>
  );
}
