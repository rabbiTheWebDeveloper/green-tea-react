import React from 'react';
import Banner from '../components/Banner';
import CustomerReview from '../components/CustomerReview';
import Discount from '../components/Discount';
import Footer from '../components/Footer';
import FreeShipping from '../components/FreeShipping';
import OrderForm from '../components/OrderForm';
import Prevent from '../components/Prevent';
import ProductDescription from '../components/ProductDescription';
import Video from '../components/Video';


const Home = () => {
    return (
        <>
        <Banner></Banner>
        <FreeShipping></FreeShipping>
        {/* <!-- section gaps --> */}
        <div className="section_gaps" />
        <Video></Video>
         {/* <!-- section gaps --> */}
         <div className="section_gaps" />
         <Prevent></Prevent>
         {/* <!-- section gaps --> */}
         <div className="section_gaps" />
         <Discount></Discount>
          {/* <!-- section gaps --> */}
          <div className="section_gaps" />
          <ProductDescription></ProductDescription>
           {/* <!-- section gaps --> */}
           <div className="section_gaps" />
           <CustomerReview></CustomerReview>
            {/* <!-- section gaps --> */}
            <div className="section_gaps" />
            <OrderForm></OrderForm>
            <Footer></Footer>
         

            
        </>
    );
};

export default Home;