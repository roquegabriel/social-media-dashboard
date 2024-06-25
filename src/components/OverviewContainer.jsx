import React from 'react'
import data from '../data/data.json';
import { OverviewCard, OverviewTodayCard } from './OverviewCard';

const converNumberToK = (num) => {
    if (num >= 10000) {
        num = num / 1000
        return `${num}k`
    } else {
        return num
    }
}


export const OverviewContainer = () => {

    return (
        <section className='max-w-[1440px] flex flex-wrap justify-center gap-[30px] absolute top-[191px] left-0 right-0 mx-auto'>
            {
                data.overview.map(object =>
                    <OverviewCard key={object.id}
                        user={object.user}
                        audienceType={object.audienceType}
                        audience={converNumberToK(object.audience)}
                        network={object.network}
                        isUp={object.isUp}
                        today={object.today} />
                )
            }
        </section>
    )
}

console.log(data['overview-today'])

export const OverviewTodayContainer = () => {
    return (
        <section className=''>
            <h2 className='text-2xl font-bold mb-[27px] text-Dark-Grayish-Blue ml-8 '>Overview Today</h2>
            <div className='flex flex-wrap max-w-[1440px] mx-auto'>
                {
                    data['overview-today'].map(object =>
                        <OverviewTodayCard key={object.id}
                            network={object.network}
                            statsType={object.statsType}
                            stats={converNumberToK(object.stats)}
                            isUp={object.isUp}
                            porcentage={object.porcentage} />
                    )
                }
            </div>
        </section>
    )
}