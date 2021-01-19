import React, { lazy } from "react";

import AddProduct from "./components/Views/Product/AddProduct";
import Brand from "./components/Views/Brand/Brand";
import Category from "./components/Views/Category/Category";
import DashBoard from "./components/Views/DashBoard/DashBoard";
import Menu from "./components/Views/Menu/Menu";
import SubCategory from "./components/Views/SubCategory/SubCategory";
import Unit from "./components/Views/Unit/Unit";

const router = [
    {
        path: "/",
        exact: true,
        component: DashBoard,
        breadCrumbs: "Dashboard"
    },
    {
        path: "/menu_list",
        component: Menu,
        breadCrumbs: "Menu",
        module: "Web-Settings"
    },
    {
        path: "/categories",
        component: Category,
        breadCrumbs: "Category",
        module: "Web-Settings"
    },
    {
        path: "/subcategories",
        component: SubCategory,
        breadCrumbs: "Sub-Category",
        module: "Web-Settings"
    },
    {
        path: "/unit",
        component: Unit,
        breadCrumbs: "Unit",
        module: "Web-Settings"
    },
    {
        path: "/brand",
        component: Brand,
        breadCrumbs: "Brand",
        module: "Web-Settings"
    },
    {
        path: "/product/add_product",
        component: AddProduct,
        breadCrumbs: "Add-Product",
        module: "Product"
    }
];

export default router;
