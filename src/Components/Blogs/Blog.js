import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 class="bg-gradient text-center text-info my-4">Question and Answer</h2>
            <div class="container mx-auto my-4">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button collapsed text-primary fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Question:  What is Context API ?
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>Context API is important feature of React 16.3 that why you can easily and lightly communicate state across the entire project.</strong>The Context API is a React framework . you can share unique facts and helps you solve prop-drilling problems at various levels of your project.When we make an application we have to work with many states or data. Context api allows us to pass down and use data or state whatever component we need in our react app without props. In other words, react context api allows us to share data across our components easily. React Context api provide us to manage complex state, nested state in a simpler and more effective way than using props. which entails passing props from grandma to kid to parent and so on.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed text-primary fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Question:  What is Semantic Tag ?
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;