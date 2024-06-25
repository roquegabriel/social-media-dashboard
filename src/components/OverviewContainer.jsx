import React from 'react'
import data from '../data/data.json';
import { OverviewCard } from './OverviewCard';

export const OverviewContainer = () => {

    const converNumberToK = (num) => {
        if (num >= 10000) {
            num = num / 1000
            return `${num}k`
        } else {
            return num
        }
    }

    return (
        <section className='w-[326px] absolute top-[191px] left-0 right-0 mx-auto'>
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
