import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "../../prisma/client";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const handle = { noLayout: true };

export const loader = async ({}: LoaderFunctionArgs) => {
  const now = new Date();
  const year = now.getFullYear();
  const start = new Date(year, 0, 1);
  const end = new Date(year + 1, 0, 1);

  try {
    const orders = await prisma.order.findMany({
      where: {
        orderDate: { gte: start, lt: end },
        status: "LIVREE",
      },
      include: { items: { include: { product: true } } },
    });

    // Gains par mois
    const gainsByMonth = Array(12).fill(0);

    // Ventes par catégorie (ou par produit si pas de champ category)
    const categorySales: Record<string, number> = {};

    orders.forEach((order) => {
      const month = order.orderDate.getMonth();
      const totalOrder = order.items.reduce(
        (sum, item) => sum + Number(item.price) * item.quantity,
        0
      );
      gainsByMonth[month] += totalOrder;

      order.items.forEach((item) => {
        // Remplace ici par item.product.category si tu as un champ catégorie
        const category = item.product?.name || "Inconnu";
        categorySales[category] =
          (categorySales[category] || 0) + item.quantity;
      });
    });

    return json({ gainsByMonth, categorySales });
  } catch {
    // Données par défaut si erreur ou base vide
    return json({
      gainsByMonth: Array(12).fill(0),
      categorySales: {
        "Bougie parfumée": 10,
        "Bougie classique": 5,
        "Bougie déco": 3,
      },
    });
  }
};

export default function Dashboard() {
  const today = new Date().toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { gainsByMonth, categorySales } = useLoaderData<typeof loader>();

  const months = [
    "Janv",
    "Févr",
    "Mars",
    "Avr",
    "Mai",
    "Juin",
    "Juil",
    "Août",
    "Sept",
    "Oct",
    "Nov",
    "Déc",
  ];

  const data = {
    labels: months,
    datasets: [
      {
        label: "Gains mensuels (€)",
        data: gainsByMonth.map((v) => Number(v).toFixed(2)),
        backgroundColor: "#ebd3f8",
      },
    ],
  };

  // Préparation des données pour le graphique circulaire
  const pieData = {
    labels: Object.keys(categorySales),
    datasets: [
      {
        data: Object.values(categorySales),
        backgroundColor: [
          "#ebd3f8",
          "#b8e0d2",
          "#f9c6c9",
          "#f7e8a4",
          "#b5ead7",
          "#c7ceea",
        ],
      },
    ],
  };

  // Calcul du total des gains
  const totalGains = gainsByMonth.reduce((a, b) => a + b, 0).toFixed(2);

  return (
    <div className="dashboardHome">
      <div className="dashboardHome__top">
        <h1 className="dashboardHome__title">Dashboard</h1>
        <p className="dashboardHome__date">{today}</p>
      </div>
      <div className="dashboardHome__content">
        <div className="dashboardHome__content__box">
          <h3 className="dashboardHome__content__title">Total des gains</h3>
          <p className="dashboardHome__content__value">{totalGains} €</p>
          <Bar data={data} />
        </div>
        <div className="dashboardHome__content__box">
          <h3 className="dashboardHome__content__title">Statistiques</h3>
          <p className="dashboardHome__content__value">Ventes par catégories</p>
          <div className="dashboardHome__content__pieBox">
            <Pie data={pieData} className="dashboardHome__content__pie" />
          </div>
        </div>
        <div className="dashboardHome__content__box" id="lastOrders">
          <h3 className="dashboardHome__content__title">Dernières commandes</h3>
          <ul className="dashboardHome__content__list">
            <li className="dashboardHome__content__item">
              <p className="dashboardHome__content__item__title">Commande 1</p>
              <p className="dashboardHome__content__item__date">12/10/2023</p>
            </li>
            <li className="dashboardHome__content__item">
              <p className="dashboardHome__content__item__title">Commande 2</p>
              <p className="dashboardHome__content__item__date">11/10/2023</p>
            </li>
            <li className="dashboardHome__content__item">
              <p className="dashboardHome__content__item__title">Commande 3</p>
              <p className="dashboardHome__content__item__date">10/10/2023</p>
            </li>
          </ul>
        </div>
        <div className="dashboardHome__content__box" id="bestSellers">
          <h3 className="dashboard__content__title">Best Sellers</h3>
          <ul className="dashboardHome__content__list">
            <li className="dashboardHome__content__item">
              <p className="dashboardHome__content__item__title">Produit 1</p>
              <p className="dashboardHome__content__item__value">50 ventes</p>
            </li>
            <li className="dashboardHome__content__item">
              <p className="dashboardHome__content__item__title">Produit 2</p>
              <p className="dashboardHome__content__item__value">30 ventes</p>
            </li>
            <li className="dashboardHome__content__item">
              <p className="dashboardHome__content__item__title">Produit 3</p>
              <p className="dashboardHome__content__item__value">20 ventes</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
