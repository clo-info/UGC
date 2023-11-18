import React from 'react'
import Counter from '../components/ProblemCounter';

function Problem() {
    return (
        <div className='problemUni'>
            <div className='problemHero'>
                <Counter />
            </div>
            <div className='problemBody'>
                <h1 className='problemTitle'>The Current State of the Crisis</h1><br></br>
                <h2 className='problemSubtitle'>A Generation of People Displaced</h2>
                <h3 className='problemPara'>
                    Climate change is considered by many sources to be one of the most present and existential threats
                    facing the species. In June of 2022 the number of displaced people worldwide reached a peak of over
                    100 million. Weather related disasters although they usually only represent temporary dispacement 
                    have been repeatedly cited as a major cause of these displacements.<br></br><br></br>

                    Climate refugees are often forgotten in the scope of foreign and international aid talks. This 
                    is for a few reasons. Firstly there is a serious lack of informations around
                    the threat of their situation to begin with. Additionally they are at a disadvantage on the global stage 
                    because the vast majority of people who are susceptible to flooding, for example, live in small, developing
                    island nations. Bangladesh is an example of a country that is at a vastly increased risk, but changing climate is having effects
                    worldwide. <br></br><br></br>

                    Though the term 'climate refugee' is often used in by experts and even in the context of UN conferences. 
                    Considering this acknowledgement of the displaced people's similarity to politcial refugees, it is strange 
                    that they are still typically unable to claim asylum based solely on this status. This means that very little of the 21 million annual displacements
                    due to climate since 2008 have seen any sort of help or aid or refuge.<br></br><br></br>

                    As of December 31st of <br></br><br></br>

                    Tristique senectus et netus et malesuada fames ac turpis egestas. Adipiscing commodo elit at imperdiet dui accumsan. Nisl condimentum id venenatis a 
                    condimentum vitae sapien. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Eget gravida cum sociis natoque penatibus et magnis. 
                    Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Risus commodo viverra maecenas accumsan. Pulvinar sapien et ligula ullamcorper malesuada proin libero.
                     Lectus nulla at volutpat diam ut venenatis tellus in. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. 
                     Enim nunc faucibus a pellentesque. Tristique senectus et netus et malesuada fames ac turpis egestas. <br></br><br></br>
                </h3>
                {/* <h4 className='problemsReferences'>
                    References<br></br><br></br>

                    <a className='ncbiLink' href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10037158/#:~:text=Although%20they%20are%20temporary%2C%20weather,2008%20%5B3%2C4%5D.'>
                        Global health, climate change and migration: The need for recognition of “climate refugees”
                    </a>
                </h4> */}
            </div>
        </div>
    )
}

export default Problem;