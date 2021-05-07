import React from 'react'

 const Services = () => {
  return (
    <div>
        <div className="container mx-auto flex flex-wrap py-6">
            <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Services</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
        {/* <!-- Posts Section --> */}
        <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5">
            <article className="flex flex-col shadow my-4">
                {/* <!-- Article Image --> */}
                <a href="#" className="hover:opacity-75 w-full">
                    <img src="images/hero-1.jpeg" />
                </a>
                <div className="bg-white flex flex-col justify-start p-6">
                    <a href="#" className="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
                    <a href="#" className="text-3xl font-bold text-center hover:text-gray-700 pb-4">Domiciliary care</a>
                    <p href="#" className="text-sm pb-3">
                        By <a href="#" className="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
                    </p>
                    <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                    <a href="#" className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></a>
                </div>
            </article>
        </div>
        </div>
    </div>
  )
}
export default Services