import React, { lazy } from "react";
import AddProduct from "./components/Product/AddProduct";
import Brand from "./components/Brand/Brand";
import Category from "./components/Category/Category";
import DashBoard from "./components/DashBoard/DashBoard";
import Menu from "./components/Menu/Menu";
import SubCategory from "./components/SubCategory/SubCategory";
import Unit from "./components/Unit/Unit";

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
