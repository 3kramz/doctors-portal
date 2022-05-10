import React from 'react';
import ButtonPrimary from '../../../Shared/ButtonPrimary';
import treatment from '../../../../assets/images/treatment.png'

const Service = () => {
    return (
        <div class="card lg:card-side mt-10">
            <figure class=" w-full sm:w-1/2">
                <img className="card h-screen" src={treatment} alt="Movie" />
            </figure>
            <div class="card-body w-full sm:w-1/2 sm:flex h-full  ">
                <h2 className="card-title text-accent text-3xl">Exceptional Dental Care, on Your Terms</h2>
                <p className="text-accent text-xl" >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions m-0 ">
                    <ButtonPrimary>Get Started</ButtonPrimary>
                </div>
            </div>
        </div>


    );
};

export default Service;