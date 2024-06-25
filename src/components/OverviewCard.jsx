import React from 'react'
import FacebookLogo from '../assets/images/icon-facebook.svg'
import TwitterLogo from '../assets/images/icon-twitter.svg'
import InstagramLogo from '../assets/images/icon-instagram.svg'
import YouTubeLogo from '../assets/images/icon-youtube.svg'
import IconUp from '../assets/images/icon-up.svg'
import IconDown from '../assets/images/icon-down.svg'

const networkLogos = {
    Facebook: FacebookLogo,
    Twitter: TwitterLogo,
    Instagram: InstagramLogo,
    YouTube: YouTubeLogo
}

const networkColors = {
    Facebook: 'bg-Facebook',
    Twitter: 'bg-Twitter',
    Instagram: 'bg-Instagram-gradient',
    YouTube: 'bg-YouTube'
}

export const OverviewCard = ({ user, audienceType, audience, network, isUp, today }) => {
    return (
        <article className='bg-Light-Grayish-Blue w-[326px] h-[216px] mb-4 rounded-[5px] mx-auto overflow-hidden text-center dark:bg-Dark-Desaturated-Blue hover:brightness-95 cursor-pointer hover:dark:brightness-125'>
            <div className={`${networkColors[network]} h-[4px] mb-8`}></div>
            <div className="flex items-center justify-center gap-2">
                <img src={networkLogos[network]} alt={`Logo ${network}`} />
                <p className='text-xs text-Dark-Grayish-Blue font-bold'>{user}</p>
            </div>
            <p className='text-[56px] font-bold text-Very-Dark-Blue dark:text-white'>{audience}</p>
            <p className='uppercase tracking-[5px] text-Dark-Grayish-Blue text-xs mb-6'>{audienceType}</p>
            <div className='flex items-center justify-center gap-1'>
                <img src={isUp ? IconUp : IconDown} alt="Icon arrow" />
                <p className={`text-xs font-bold ${isUp ? 'text-Lime-Green' : 'text-Bright-Red'}`}>{today} Today</p>
            </div>
        </article>
    )
}

export const OverviewTodayCard = ({ network, statsType, stats, porcentage, isUp }) => {
    return (
        <article className='bg-Light-Grayish-Blue w-[326px] h-[125px] mb-4 mx-auto rounded-[5px] p-[27px] cursor-pointer hover:brightness-95  dark:bg-Dark-Desaturated-Blue hover:dark:brightness-125'>
            <div className='flex items-center justify-between'>
                <p className='text-Dark-Grayish-Blue'>{statsType}</p>
                <img src={networkLogos[network]} alt={`Logo ${network}`} />
            </div>
            <div className='flex justify-between'>
                <p className='text-Very-Dark-Blue dark:text-white font-bold text-[42px]'>{stats}</p>
                <div className='flex items-center justify-center gap-1'>
                    <img src={isUp ? IconUp : IconDown} alt="Icon arrow" />
                    <p className={`text-xs font-bold ${isUp ? 'text-Lime-Green' : 'text-Bright-Red'}`}>{porcentage} Today</p>
                </div>
            </div>
        </article>
    )
}
