import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { prisma } from "../../prisma/client";
import React from "react";

import products from "../data/products.json"; // adapte le chemin si besoin

export const handle = { noLayout: true };

export default function DashboardListedProducts() {
  return (
    <div className="dashboardListedProducts">
      <div className="dashboardListedProducts__nav">
        <Link
          to="/dashboard/products"
          className="dashboardListedProducts__nav__Link"
        >
          <img
            src="/icones/arrow.png"
            alt="Back to menu button"
            width={25}
            className="dashboardListedProducts__nav__img"
          />
        </Link>
        <p className="dashboardListedProducts__nav__text">Retour au menu</p>
      </div>
      <div className="dashboardListedProducts__top">
        <div className="dashboardListedProducts__topBox">
          <div className="dashboardListedProducts__titleBox">
            <h1 className="dashboardListedProducts__topBox__title">
              Liste des Produits
            </h1>
            <h2 className="dashboardListedProducts__topBox__subtitle">
              Vision des stocks en temps réel
            </h2>
          </div>
          <div className="dashboardListedProducts__searchBox">
            <input
              type="text"
              className="dashboardListedProducts__searchBox__input"
              placeholder="Rechercher un produit"
            />
            <div className="dashboardListedProducts__searchBox__iconBox">
              <img
                src="/icones/search.png"
                alt="Search icon"
                className="dashboardListedProducts__searchBox__icon"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="dashboardListedProducts__list">
      <table className="dashboardListedProducts__table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Nom</th>
              <th>ID</th>
              <th>Stock</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id}>
                <td>
                  <img
                    src={prod.photo}
                    alt={prod.name}
                    width={50}
                    height={50}
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                </td>
                <td>{prod.name}</td>
                <td>{prod.id}</td>
                <td>{prod.stock}</td>
                <td>{prod.price.toFixed(2)} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
