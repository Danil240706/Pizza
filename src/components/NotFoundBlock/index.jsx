import React from "react";
import styles from "./NotFoundBlock.module.scss";
 
const NotFoundBlock = () => {
   return (
     <div className={styles.root}>
        <h1>
            <span>404</span>
            <br />
            УВЫ
        </h1>
        <p className={styles.desription}> Страница сдохла, сегодня ты останешьсо голодным</p>
     </div>
   )
}
 export default NotFoundBlock;