import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import { prisma } from "../../prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import React from "react";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret"; // Mets une vraie clé secrète en prod

export const meta: MetaFunction = () => [{ title: "Connexion - C&J Bougies" }];

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const email = form.get("Email");
  const password = form.get("Mot de passe");

  if (!email || !password) {
    return { status: "error", message: "Champs requis manquants" };
  }

  const user = await prisma.user.findUnique({
    where: { email: email as string },
  });
  if (!user) {
    return { status: "error", message: "Identifiants invalides" };
  }

  const valid = await bcrypt.compare(password as string, user.passwordHash);
  if (!valid) {
    return { status: "error", message: "Identifiants invalides" };
  }

  // Création du token JWT valable 1h
  const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });

  // Redirection vers la page d'accueil avec le cookie
  return redirect("/", {
    headers: {
      "Set-Cookie": `token=${token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Lax`,
    },
  });
}

export default function Login() {
  const actionData = useActionData<typeof action>();

  React.useEffect(() => {
    if (actionData?.status === "error") {
      alert("User Failed");
    }
  }, [actionData]);

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
        Vous n'avez pas encore de compte ?
        <Link to="/register" className="login__link">
          Inscrivez-vous
        </Link>
      </p>
    </div>
  );
}
