import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { prisma } from "../../prisma/client";
import React from "react";

export const handle = { noLayout: true };

export default function DashboardManageProducts() {
  const [preview, setPreview] = React.useState<string | undefined>(undefined);
  const [price, setPrice] = React.useState<number>(0);
  const [discount, setDiscount] = React.useState<number>(0);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(undefined);
    }
  }

  // Calcul du prix final
  const finalPrice =
    price && discount
      ? (price - price * (discount / 100)).toFixed(2)
      : price
      ? price.toFixed(2)
      : "";

  return (
    <div className="dashboardProducts">
      <div className="dashboardProducts__nav">
        <div className="dashboardProducts__nav__back">
          <Link
            to="/dashboard/products"
            className="dashboardProducts__nav__Link"
          >
            <img
              src="/icones/arrow.png"
              alt="Back to menu button"
              width={25}
              className="dashboardProducts__nav__img"
            />
          </Link>
          <p className="dashboardProducts__nav__text">Retour à la liste</p>
        </div>
        <h1 className="dashboardProducts__nav__title">
          Ajouter un Nouveau Produit
        </h1>
        <button className="dashboardProducts__nav__button">
          Enregistrer le produit
        </button>
      </div>
      <div className="dashboardProducts__content">
        <div className="dashboardProducts__imgBox">
          <div className="dashboardProducts__imgBox__titleBox">
            <h2 className="dashboardProducts__imgBox__title">
              Images du Produit
            </h2>
          </div>
          <div className="dashboardProducts__imgBox__imgBox">
            {preview ? (
              <img
                src={preview || ""}
                alt="Your uploaded image"
                className="dashboardProducts__imgBox__img"
              />
            ) : (
              "Veuillez ajouter une image"
            )}
          </div>
          <input
            type="file"
            className="dashboardProducts__imgUploadButton"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className="dashboardProducts__productInformation">
          <div className="dashboardProducts__productInformation__titleBox">
            <h2 className="dashboardProducts__productInformation__title">
              Informations sur le Produit
            </h2>
          </div>
          <div className="dashboardProducts__productInformation__inputBox">
            <label
              htmlFor="productName"
              className="dashboardProducts__productInformation__label"
            >
              Nom du Produit
            </label>
            <input
              type="text"
              id="productName"
              className="dashboardProducts__productInformation__input"
            />
          </div>
          <div className="dashboardProducts__productInformation__inputBox">
            <label
              htmlFor="productDescription"
              className="dashboardProducts__productInformation__label"
            >
              Description
            </label>
            <textarea
              id="productDescription"
              className="dashboardProducts__productInformation__textarea"
            ></textarea>
          </div>
          <div
            className="dashboardProducts__productInformation__inputBox"
            id="productPriceBox"
          >
            <div className="dashboardProducts__productInformation__priceBox">
              <label
                htmlFor="productPrice"
                className="dashboardProducts__productInformation__label"
              >
                Prix
              </label>
              <input
                type="text"
                id="productPrice"
                className="dashboardProducts__productInformation__input"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div className="dashboardProducts__productInformation__priceBox">
              <label
                htmlFor="productDiscount"
                className="dashboardProducts__productInformation__label"
              >
                Remise (Optionel)
              </label>
              <input
                type="text"
                id="productDiscount"
                className="dashboardProducts__productInformation__input"
                value={discount}
                onChange={(e) => setDiscount(Number(e.target.value))}
              />
            </div>
            <div className="dashboardProducts__productInformation__priceBox">
              <label
                htmlFor="productFinalPrice"
                className="dashboardProducts__productInformation__label"
              >
                Prix final
              </label>
              <input
                className="dashboardProducts__productInformation__input"
                id="productFinalPrice"
                type="text"
                value={finalPrice ? `${finalPrice} €` : ""}
                readOnly
              />
            </div>
          </div>

          <div className="dashboardProducts__productInformation__inputBox">
            <label
              htmlFor="productCategory"
              className="dashboardProducts__productInformation__label"
            >
              Catégorie
            </label>
            <select
              id="productCategory"
              className="dashboardProducts__productInformation__select"
            >
              <option value="" disabled selected>
                Sélectionner une catégorie
              </option>
              <option value="category1">Catégorie 1</option>
              <option value="category2">Catégorie 2</option>
              <option value="category3">Catégorie 3</option>
            </select>
          </div>
          <div className="dashboardProducts__productInformation__inputBox">
            <label
              htmlFor="productStock"
              className="dashboardProducts__productInformation__label"
            >
              Stock Initial
            </label>
            <input
              type="text"
              id="productStock"
              className="dashboardProducts__productInformation__input"
            />
            </div>
        </div>
      </div>
    </div>
  );
}
