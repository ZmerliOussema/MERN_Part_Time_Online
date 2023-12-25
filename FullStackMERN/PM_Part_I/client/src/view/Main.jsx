import React, { useState } from 'react';
import PMForm from '../components/PM_Form';
import DisplayAllPM from '../components/DisplayAllPM';

const Main = () => {
    const [productList, setProductList] = useState([])
    return (
        <div>
            <PMForm productList={productList} setProductList={setProductList}/>
            <DisplayAllPM productList={productList} setProductList={setProductList}/>
        </div>
    );
}

export default Main;
