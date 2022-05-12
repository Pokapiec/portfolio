import React, {useEffect, useState} from 'react'
import './Tech.scss';
import { useInView } from 'react-intersection-observer';

export default function Tech() {
    let abilities = {
        Python: 100,
        Django: 80,
        Flask: 60,
        FastAPI: 60,
        JavaScript: 80,
        NodeJS: 70,
        HTML: 90,
        CSS: 70,
        React: 80,
        "Microsoft Azure": 70,
        SQL: 80,
        Git: 90,
        C: 50
    }

    let options = {
        threshold: 0.5,
        triggerOnce: true
      }
    
    const [TechRef, TechInView] = useInView(options)
    const sortable = Object.keys(abilities)
                           .sort(function(a,b) {
                               return abilities[b]-abilities[a]
                            })
    
    return (
        <section className='tech' ref={TechRef}>
            <h2>Skills</h2>
            <ul>
                {sortable.map((k, v) => (
                    <li key={k}>
                        <div className='horizontal-flex'>
                            <div>{k}</div>
                            <div>{abilities[k]}%</div>
                        </div>
                        {TechInView ? 
                        <div className={`progress-bar-${abilities[k]}`}></div> 
                        :  <div className={`progress-bar`}></div> }
                        
                    </li>
                ))}
            </ul>
        </section>
    )
}
