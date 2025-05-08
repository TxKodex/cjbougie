import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { prisma } from "../../prisma/client";

export const handle = { noLayout: true };

export default function DashboardProducts() {
  return (
    <div className="dashboardProducts">
      <div className="dashboardProducts__homeButton">
        <div className="dashboardProducts__list">
          <Link to="/dashboard/list" className="dashboardProducts__Link">
            Liste des produits
          </Link>
        </div>
        <div className="dashboardProducts__manage">
          <Link
            to="/dashboard/manageProducts"
            className="dashboardProducts__Link"
            id="manageProducts"
          >
            Ajouter un produit
          </Link>
        </div>
      </div>
    </div>
  );
}
