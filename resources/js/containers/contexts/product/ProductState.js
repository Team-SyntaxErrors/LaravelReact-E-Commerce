import React, { useEffect, useRef, useState } from "react";

import Axios from "axios";
import ProductContext from "./ProductContext";
import SimpleReactValidator from "simple-react-validator";
import Slugger from "../../../components/helpers/slugger/Slugger";
import { toast } from "react-toastify";
import useForms from "../../../customHooks/useForms";

const ProductState = props => {
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [brand, setBrand] = useState([]);
    const [unit, setUnit] = useState([]);
    const [slugWarning, setSlugWarning] = useState("");
    const [error, setError] = useState([]);
    const simpleValidator = useRef(new SimpleReactValidator());
    const [product, setProduct, handleChange] = useForms({
        product_name: "",
        product_slug: "",
        product_sku: "",
        category_id: "",
        subcategory_id: "",
        brand_id: "",
        purchase_price: "",
        sell_price: "",
        unit_id: "",
        product_alert_qty: "",
        tags: [],
        status: "",
        description: ""
    });

    useEffect(() => {
        getCategory();
        getBrand();
        getUnit();
    }, []);

    /**
     * It's slugify the product name using regex
     * And check if the slug already recorded
     *
     * @param  {object} event
     * @return {void}
     */
    const slugger = event => {
        let name = event.target.value;
        if (name == "") {
            setSlugWarning("Name field is empty");
            return;
        }
        setSlugWarning("");
        let slug = Slugger(name);
        // Check slug availability from database
        Axios.get("/product_slug_check/" + slug)
            .then(response => {
                if (response.status == 204) {
                    setProduct({ ...product, ["product_slug"]: slug });
                } else {
                    setSlugWarning("This slug is recorded already");
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    /**
     * Assigning product tags as an array to product object
     *
     * @param  {array} newTags
     * @return {void}
     */
    const setTags = newTags => {
        setProduct({ ...product, ["tags"]: newTags });
        // simpleValidator.current.showMessageFor("tags");
    };

    /**
     * Assigning product description to product object
     *
     * @param  {string} description
     * @return {void}
     */
    const setDescription = description => {
        setProduct({ ...product, ["description"]: description });
    };

    /**
     * Getting the active category list
     *
     * @return {void}
     */
    const getCategory = () => {
        Axios.get("/all_categories")
            .then(response => {
                setCategory(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    /**
     * Get category wise sub category.
     *
     * @param {int} category_id
     */
    const getSubCategory = event => {
        let category_id = event.target.value;
        Axios.get("/subcategory_get/" + category_id)
            .then(response => {
                setSubCategory(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    /**
     * Getting the active brand list
     *
     * @return {void}
     */
    const getBrand = () => {
        Axios.get("/all_brand_get")
            .then(response => {
                setBrand(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    /**
     * Getting the active unit list
     *
     * @return {void}
     */
    const getUnit = () => {
        Axios.get("/all_unit_get")
            .then(response => {
                setUnit(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    /**
     * Clear form data
     *
     * @return {void}
     */
    const clearFrom = () => {
        setError([]);
        let form = product;
        Object.keys(form).forEach(function(key) {
            form[key] = "";
        });
        form.tags = [];
        setProduct({ ...product, ...form });
    };

    /**
     * Submitting the product data.
     *
     * @param {object} event
     */
    const submitHandler = event => {
        event.preventDefault();
        console.log(simpleValidator.current);
        if (simpleValidator.current.allValid()) {
            Axios.post("/products", product)
                .then(response => {
                    if (response.data.code === 201) {
                        toast.success("Product Data Inserted Successfully!");
                        clearFrom();
                    }
                })
                .catch(error => {
                    if (error.response) {
                        setError(error.response.data.errors);
                    }
                });
        } else {
            setError(simpleValidator.current.errorMessages);
        }
    };
    return (
        <ProductContext.Provider
            value={{
                category,
                setCategory,
                subCategory,
                setSubCategory,
                brand,
                setBrand,
                unit,
                setUnit,
                slugWarning,
                setSlugWarning,
                error,
                setError,
                simpleValidator,
                product,
                setProduct,
                handleChange,
                slugger,
                setTags,
                setDescription,
                getCategory,
                getSubCategory,
                getBrand,
                getUnit,
                clearFrom,
                submitHandler
            }}
        >
            {props.children}
        </ProductContext.Provider>
    );
};

export default React.memo(ProductState);
