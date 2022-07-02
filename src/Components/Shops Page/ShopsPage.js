import React from 'react';
import ShopList from "./ShopList/ShopList";
import CardBlock from "./CardBlock/CardBlock";
import css from "./ShopPage.module.css";
import Pagination from "./Pagination/Pagination";

const ShopsPage = () => {
    return (
        <div className={css.flex}>
            <ShopList/>
            <CardBlock/>
            <Pagination/>
        </div>
    );
};

export default ShopsPage;