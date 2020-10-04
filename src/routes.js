import Main from "./pages/MainPage";


const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/Recommand",
    name: "Recommand",
    component: () => import("./pages/Recommand"),
  },
  {
    path: "/Catalog",
    name: "Catalog",
    component: () => import("./pages/Catalog"),
  },
  {
    path: "/Rent",
    name: "Rent",
    component: () => import("./pages/Rent"),
  },
  {
    path: "/Contact",
    name: "Contact",
    component: () => import("./pages/Contact"),
  },
  {
    path: "/Order",
    name: "Order",
    component: () => import("./pages/Order"),
  },
  {
    path: "/About",
    name: "About",
    component: () => import("./pages/About"),
  },
];

export default routes;
