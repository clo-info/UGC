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
                    Climate change is considered by many sources to be one of the most present and existential threats.
                    facing the species. In June 2022, the number of displaced people worldwide reached a peak of over
                    100 million. Weather-related disasters, although they usually only represent temporary displacement,
                    have been repeatedly cited as a major cause of these displacements.<br></br><br></br>

                    Climate refugees are often forgotten in the scope of foreign and international aid talks. This
                    is for a few reasons. Firstly, there is a serious lack of information around
                    the threat of their situation to begin with. Additionally, they are at a disadvantage on the global stage.
                    because the vast majority of people who are susceptible to flooding, for example, live in small, developing
                    island nations. Bangladesh is an example of a country that is at a vastly increased risk, but the changing climate is having effects.
                    worldwide. <br></br><br></br>

                    Though the term 'climate refugee' is often used by experts and even in the context of UN conferences,
                    Considering this acknowledgement of the displaced people's similarity to political refugees, it is strange.
                    that they are still typically unable to claim asylum based solely on this status. This means that very little of the 
                    21 million annual displacements due to climate since 2008 have seen any sort of help, aid, or refuge.<br></br><br></br>

                    At this point, the fact that aid to these people has been few and far between seems to mostly stem from a lack of will.
                    Most everyone, organizations, individuals, corporations, and governments, agrees that the root cause of climate refugees' suffering is
                    climate change, is real. less, but still, many agree on how to solve it. The only real point of contention here seems to be
                    whether or not we should assign these people the official status of refugees.<br></br><br></br> 
                    
                    Both sides have their points. The pro side seems to think that the conditions and realities of these groups are incredibly comparable.  
                    to political refugees, which is hard to deny. The anti-side seems to think that the change in status for an extra 100–300 million people
                    will diminish the status of the term "refugee." In brief, the broadening of definitions will make it harder to secure aid for all.
                    refugees, both climatic and political.<br></br><br></br><br></br><br></br>
                </h3>
            </div>
        </div>
    )
}

export default Problem;