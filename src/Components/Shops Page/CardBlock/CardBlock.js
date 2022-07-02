import React from 'react';
import Cards from "./Card/Cards";
 import css from "./CardBlock.module.css"



const CardBlock = () => {
    return (
        <div  className={css.flex}>
            <Cards/>
        </div>
    );
};

export default CardBlock;
