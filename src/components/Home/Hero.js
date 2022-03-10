export const Hero = () => {
    return(
        <div className="min-h-fit bg-gray-200  flex  items-center justify-end">
           <div className="w-5/12">
                <img src="/images/lmw_hero_3523.jpeg" alt="lisa"/>
           </div>
           <div className="w-7/12 h-96 flex flex-col justify-evenly items-start">
                <h1 className="font-playfair text-blue-400">An extraordinary life <br/> <span className="italic">starts with self care.</span> </h1>

                <p className="font-playfair text-blue-400 w-6/12">
                Discover three simple actions you can take right now to positively impact your body, mind and life.
                </p>

                <button className="group transform rounded h-14 px-8 bg-transparent border border-blue-400 text-blue-400">
                    TAKE THE SELF CARE QUIZ <span className="hidden group-hover:inline-block"> {">"} </span>
                </button>
           </div>
        </div>
    )
}