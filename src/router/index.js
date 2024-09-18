import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import Layout from "../components/Layout.vue";
import EnterpriseData from "../views/EnterpriseData.vue";
import ScientificLeader from "../views/ScientificLeader.vue";
import SecondaryAnalysis from "../views/SecondaryAnalysis.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/enterprise-data",
    children: [
      {
        path: "/enterprise-data",
        name: "enterprise-data",
        component: EnterpriseData,
      },
      {
        path: "/scientific-leader",
        name: "scientific-leader",
        component: ScientificLeader,
      },
      {
        path: "/secondary-analysis",
        name: "secondary-analysis",
        component: SecondaryAnalysis,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
