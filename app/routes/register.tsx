import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import { prisma } from "../../prisma/client"; // adapte le chemin si besoin
import React from "react";
import bcrypt from "bcryptjs";

export const meta: MetaFunction = () => [
  { title: "Inscription - C&J Bougies" },
];

function validatePassword(password: string) {
  // 8 caractères, 1 maj, 1 chiffre, 1 symbole
  return /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(
    password
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const civilite = form.get("Civilite");
  const lastName = form.get("Nom");
  const firstName = form.get("Prénom");
  const email = form.get("Email");
  const password = form.get("Mot de passe");
  const passwordConfirm = form.get("Confirmation mot de passe");

  // Vérification des champs requis
  if (
    !civilite ||
    !lastName ||
    !firstName ||
    !email ||
    !password ||
    !passwordConfirm
  ) {
    return { status: "error", message: "Tous les champs sont requis." };
  }

  // Vérification mot de passe
  if (password !== passwordConfirm) {
    return {
      status: "error",
      message: "Les mots de passe ne correspondent pas.",
    };
  }
  if (!validatePassword(password as string)) {
    return {
      status: "error",
      message:
        "Le mot de passe doit faire au moins 8 caractères, contenir une majuscule, un chiffre et un symbole.",
    };
  }

  // Vérification email unique
  const existingUser = await prisma.user.findUnique({
    where: { email: email as string },
  });
  if (existingUser) {
    return { status: "error", message: "Cet email est déjà utilisé." };
  }

  // Hash du mot de passe
  const passwordHash = await bcrypt.hash(password as string, 10);

  try {
    await prisma.user.create({
      data: {
        civilite: civilite as string,
        firstName: firstName as string,
        lastName: lastName as string,
        email: email as string,
        passwordHash,
        roleCode: "1001",
      },
    });
    return redirect("/login");
  } catch (e) {
    return {
      status: "error",
      message: "Erreur lors de la création de l'utilisateur.",
    };
  }
}

export default function Register() {
  const actionData = useActionData<typeof action>();

  React.useEffect(() => {
    if (actionData?.status === "ok") {
      alert("User ok");
    } else if (actionData?.status === "error") {
      alert(actionData.message || "User NOT ok");
    }
  }, [actionData]);

  return (
    <div className="register">
      <h1 className="register__title">Inscription</h1>
      <h2 className="register__subtitle">
        Veuillez remplir le formulaire d'inscription.
      </h2>
      <Form method="post" className="register__form">
        <div className="register__box">
          <select name="Civilite" id="civilite" className="register__select">
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
