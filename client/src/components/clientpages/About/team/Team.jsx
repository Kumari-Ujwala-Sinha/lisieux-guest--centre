import React from 'react'
import './team.css'
function Team() {
    const arr=[
        {
            img:"/assets/person6.jpg",
            name:"Elizabeth Graham",
            position:"CEO",
            desc:`dded, and removed to make it nonsensical and improper Latin.
            Versions of the Loremopularized by advertisements for Letraset transfer sheets.[1] Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employ`
        },
        {
            img:"/assets/person7.jpg",
            name:"Jennifer Greive",
            position:"PRESIDENT",
            desc:"dded, and removed to make it nonsensical and improper Latin. Versions of the Loremopularized by advertisements for Letraset transfer sheets.[1] Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employ"
        },
        {
            img:"/assets/person8.jpg",
            name:"Patrick Marx",
            position:"MARKETER",
            desc:"dded, and removed to make it nonsensical and improper Latin. Versions of the Loremopularized by advertisements for Letraset transfer sheets.[1] Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employ"
        },
        {
            img:"/assets/person8.jpg",
            name:"Mike C",
            position:"PARTNER",
            desc:"dded, and removed to make it nonsensical and improper Latin. Versions of the Loremopularized by advertisements for Letraset transfer sheets.[1] Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employ"
        }
    ]
    return (
        <div className="team">
            <div className="team__title">The Team</div>
            <div className="team__wrapper">
            {
                arr.map((val)=>{
                    return(
                    <div className="team__member">
                        <div className="team__head">
                            <img src={val.img} alt=""/>
                            <h2>{val.title}</h2>
                            <p>{val.position}</p>
                        </div>
                        <div className="team__desc">
                            {val.desc}
                        </div>
                    </div>
                    )
                })
            }
                
                
            </div>
                
        </div>
    )
}

export default Team
