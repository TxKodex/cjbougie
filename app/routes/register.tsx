import type { MetaFunction } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Inscription - C&J Bougies" },
];

export default function Register() {
  return (
    <div className="register">
      <h1 className="register__title">Inscription</h1>
      <h2 className="register__subtitle">
        Veuillez remplir le formulaire d'inscription.
      </h2>
      <Form method="post" className="register__form">
        <div className="register__box">
          <select name="Civilité" id="civilite" className="register__select">
            <option value="" disabled selected>
              Sélectionnez votre civilité
            </option>
            <option value="Monsieur">Monsieur</option>
            <option value="Madame">Madame</option>
            <option value="Autres">Autres</option>
          </select>
        </div>
        <div className="register__box">
          <input
            type="text"
            name="Nom"
            id="nom"
            placeholder="Nom"
            className="register__input"
            required
          />
          <input
            type="text"
            name="Prénom"
            id="prenom"
            placeholder="Prénom"
            className="register__input"
            required
          />
        </div>
        <div className="register__box">
          <input
            type="email"
            name="Email"
            id="email"
            placeholder="Email"
            className="register__input"
            required
          />
        </div>
        <div className="register__box">
          <input
            type="password"
            name="Mot de passe"
            id="mdp"
            placeholder="Mot de passe"
            className="register__input"
            required
          />
          <input
            type="password"
            name="Confirmation mot de passe"
            id="mdp-confirmation"
            placeholder="Confirmation mot de passe"
            className="register__input"
            required
          />
        </div>

        <button type="submit" className="register__button">
          S'INSCRIRE
        </button>
      </Form>
      <p className="register__text">
        Vous avez déjà un compte ?
        <Link to="/login" className="register__link">
          Connectez-vous
        </Link>
      </p>
    </div>
  );
}
