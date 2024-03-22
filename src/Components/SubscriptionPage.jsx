import React from 'react'
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
  ]
  return (
    <div className=''>
      <div className='p-2'>
        <h1 className='text-blue-500 text-6xl font-bold'>Subscriptions</h1>
      </div>
      <div className='p-2 m-1'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur dolores voluptatum fugit, quaerat impedit id nesciunt sit. Distinctio, asperiores nemo facere non saepe aperiam enim adipisci aspernatur ab odit suscipit iste molestiae reiciendis neque nisi dolore eum similique. Dicta!
        </p>
      </div>

      <div className='flex justify-evenly w-full mt-10'>
        {
          subscripPlan.map((element) => {
            return (<>
              Hi
              {/* {element.name} */}
              <SubscriptionPage planName={element.name} planCost={element.price} numberOfScreens={element.noOfScreen} />
            </>
            );
          })
        }
      </div>
    </div>
  )
}

export default SubscriptionPage
