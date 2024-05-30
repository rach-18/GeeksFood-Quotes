import '../App.css'

function Navbar() {
    return(
        <div>
            <header class="text-gray-400 bg-gray-900 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
                        <span class="ml-3 text-xl">GeeksFood</span>
                    </a>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-semibold text-white">
                        <a class="mr-5 text-[#1D4ED8] cursor-pointer">Home</a>
                        <a class="mr-5 hover:text-[#1D4ED8] cursor-pointer">Quote</a>
                        <a class="mr-5 hover:text-[#1D4ED8] cursor-pointer">Restaurants</a>
                        <a class="mr-5 hover:text-[#1D4ED8] cursor-pointer">Foods</a>
                        <a class="mr-5 hover:text-[#1D4ED8] cursor-pointer">Contact</a>
                    </nav>
                    <button class="inline-flex items-center bg-[#048EFE] border-0 py-2 px-3 focus:outline-none hover:bg-[#1D4ED8] rounded-lg text-white text-base mt-4 md:mt-0 font-semibold">Get Started</button>
                </div>
            </header>
        </div>
    )
}

export default Navbar;
