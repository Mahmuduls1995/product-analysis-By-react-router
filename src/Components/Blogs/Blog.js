import React from 'react';

const Blog = () => {
    return (
        <>
        <div className="container mx-auto px-4">
            <h1 className="text-5xl text-center f-m-w text-indigo-700 font-bold pt-0">Our Blogs</h1>
            <div className="pt-14 xl:px-0 px-4">
                <div className="w-full lg:flex">
                    
                    <div className="lg:w-1/2">
                        <img src="https://www.carlrippon.com/static/0d1f722d0fe4c2bc4c3d71595dbe67dd/ca682/prop-drilling-v-context.png" className="w-full" />
                        <div className="mt-8 lg:mb-0 mb-8">
                            <h1 className="f-m-m text-2xl font-semibold leading-7">What is Context API ?</h1>
                            <strong>Context API is important feature of React 16.3 that why you can easily and lightly communicate state across the entire project.</strong>The Context API is a React framework . you can share unique facts and helps you solve prop-drilling problems at various levels of your project.When we make an application we have to work with many states or data. Context api allows us to pass down and use data or state whatever component we need in our react app without props. In other words, react context api allows us to share data across our components easily. React Context api provide us to manage complex state, nested state in a simpler and more effective way than using props. which entails passing props from grandma to kid to parent and so on.
                            <div className="mt-6">
                               
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 lg:ml-8">

                       

                        <div className="  mb-8">
                            <img src="https://pbs.twimg.com/media/FD7gFAOVIAchAe2.jpg" className="w-full h-50" />
                            <div className="lg:ml-6">
                                <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-12">What is Semantic Tag ?</h1>
                                <strong>Everything is shown on the web site through this markup language</strong>
                                Before the adventage of HTML5, everything was done by imagining a dev, before that it was done with a table, dev had a problem with which navbar, which header, which footer, nothing was understood. So to solve this problem, HTML Five Bring semantic tag,
                                Maybe we as developers could understand which header is which footer but it would be a problem for search engine,
                                So to solve the problem, HTML Five is bringing semantic tag by which these problems are solved,
                                And for this reason, it is well understood by search engines.
                                Below are some semantic tags:
                                article,
                                aside,
                                details,
                                footer,
                                header.
                                <div className="mt-4">
                                   
                                </div>
                            </div>
                        </div>

                    </div>


                </div>


            </div>
            <div className="flex items-center justify-center my-16 w-full">
                <button className=" hover:bg-gray-200 border border-indigo-700 border-2 lg:text-2xl md:text-lg text-sm rounded f-m-m font-semibold text-indigo-700 focus:outline-none lg:px-12 px-6 lg:py-6 py-3 xl:leading-4">Browse More</button>
            </div>
            <div />
        </div>
    </>
    );
};

export default Blog;





