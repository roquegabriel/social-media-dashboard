import { useEffect, useState } from "react"



export const Header = () => {

    const [darkMode, setDarkMode] = useState(false)

    const handleClick = () => {

        setDarkMode(!darkMode)
    }

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')

        } else {
            document.documentElement.classList.remove('dark')

        }
    }, [darkMode])


    return (
        <header className="bg-Very-Pale-Blue dark:bg-Very-Dark-Blue h-[235px] rounded-b-[20px] pt-8 px-6 mb-[1000px] md:mb-[480px] xl:mb-[200px]">
            <h1 className="text-Very-Dark-Blue font-bold text-2xl mb-1 dark:text-Very-Pale-Blue">Social Media Dashboard</h1>
            <p className="text-Dark-Grayish-Blue font-bold mb-6 dark:text-Desaturated-Blue">Total Followers: 23,004</p>
            <hr className="bg-black mb-[19px]" />
            <div className="flex justify-between">
                <p className="text-Dark-Grayish-Blue font-bold dark:text-Desaturated-Blue">Dark Mode</p>
                <label htmlFor="dark-mode" className="border bg-Toggle w-12 h-6 rounded-full cursor-pointer p-[3px] relative overflow-hidden">
                    <input onClick={handleClick} type="checkbox" name="dark-mode" id="dark-mode" className="sr-only peer" />
                    <div className="peer-checked:bg-Toggle-gradient absolute top-0 left-0 w-full h-full"></div>
                    <div className="w-[18px] h-[18px] bg-Light-Grayish-Blue rounded-full peer-checked:translate-x-[24px] transition-all"></div>
                </label>
            </div>
        </header>
    )
}
