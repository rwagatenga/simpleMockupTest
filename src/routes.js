// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import ViewListIcon from '@material-ui/icons/ViewList';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
// core components/views for Admin layout
import Home from "views/Home/Home.js";
import Subvention from "views/Subvention/Subvention.js";
import Produit from "views/Produit/Produit.js";
import Client from "views/Client/Client.js";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "PLAN D'AFFAIRE",
    icon: Dashboard,
    component: Home,
    layout: "/admin"
  },
  {
    path: "/subvention",
    name: "DON ET SUBVENTION",
    icon: ViewListIcon,
    component: Subvention,
    layout: "/admin"
  },
  {
    path: "/produitetservice",
    name: "PRODUIT ET SERVICE",
    icon: ViewListIcon,
    component: Produit,
    layout: "/admin"
  },
  {
    path: "/client",
    name: "ClIENT",
    icon: AccountBoxIcon,
    component: Client,
    layout: "/admin"
  },
];

export default dashboardRoutes;
