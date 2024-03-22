import React from 'react'
import { useState } from 'react'
import SingleSubscriptionCard from './SingleSubscriptionCard'

const SubscriptionPage = () => {

  let subscripPlan = [
    {
      name: "Tier 1",
      price: "500",
      noOfScreen: 1
    },
    {
      name: "Tier 2",
      price: "1500",
      noOfScreen: 2
    },
    {
      name: "Tier 3",
      price: "2500",
      noOfScreen: 4
    },
  ];

  const changeBillingTiming = () =>{
    if(billingTiming == 0){
      setBillingTiming(1);

    }
    else{
      setBillingTiming(0);
    }
  }



  const [billingTiming, setBillingTiming] = useState(0);


  return (
    <div className=''>
      <div className='p-2'>
        <h1 className=" text-blue-500 text-6xl font-bold">Subscriptions</h1>
      </div>
      <div className='p-2 m-1'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur dolores voluptatum fugit, quaerat impedit id nesciunt sit. Distinctio, asperiores nemo facere non saepe aperiam enim adipisci aspernatur ab odit suscipit iste molestiae reiciendis neque nisi dolore eum similique. Dicta!
        </p>
      </div>

      <div class="flex items-center justify-center mt-10 space-x-4">
        <span class="text-base font-medium">Bill Monthly</span>
        <button
          onClick = {changeBillingTiming}
          class={"relative rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 "  + (billingTiming === 0 ? "focus:ring-indigo-500" : "focus:ring-green-300")}>

          <div class={"w-16 h-8 transition rounded-full shadow-md outline-none " + (billingTiming === 0 ? "bg-indigo-500" :"bg-green-400" )}></div>
          <div
            class={(billingTiming === 0 ? "translate-x-0" : "translate-x-8") + "  absolute inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform bg-white rounded-full shadow-sm top-1 left-1"}
          ></div>
        </button>
        <span class="text-base font-medium">Bill Annually</span>
      </div>

      <div className='flex justify-evenly w-full mt-10'>

        {
          subscripPlan.map(
            (item) => {
              return (
                <SingleSubscriptionCard planName={item.name} planCost={item.price} numberOfScreens={item.noOfScreen} billingTime = {billingTiming}/>
              )
            }
          )
        }


      </div>
    </div>
  )
}

export default SubscriptionPage
