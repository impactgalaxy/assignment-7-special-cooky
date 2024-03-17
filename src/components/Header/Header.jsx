export default function Header() {
    return (
        <div className="p-4">
            <div className="navbar bg-base-100 flex justify-between">
                <div>
                    <a className="btn btn-ghost text-xl text-[#844dfc]">Special Cooky</a>
                </div>
                <div className="space-x-3 hidden lg:flex">
                    <p>Home</p>
                    <p>Recipes</p>
                    <p>About</p>
                    <p>Search</p>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control relative">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto pl-12" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute top-1/2 -translate-y-1/2 left-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <i className="fa-solid fa-user text-2xl"></i>

                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge text-blue-400">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4 p-6 container m-auto flex-col text-center bg-hero-pattern bg-center bg-cover rounded-xl mt-8">
                <h1 className="font-black text-3xl lg:text-6xl text-green-500">Discover an exceptional cooking class tailored for you!</h1>
                <p className="text-white"> It’s a symphony of flavors, a dance of ingredients, and a canvas for creativity. When you step into the kitchen, you become a composer, blending spices, herbs, and textures to create harmonious dishes. </p>
                <div className="space-x-4">
                    <a className="btn bg-[#0BE58A] font-bold" href="#cooking">Explore Now</a>
                    <button className="btn">Our Feedback</button>
                </div>

            </div>


        </div>

    )
}
