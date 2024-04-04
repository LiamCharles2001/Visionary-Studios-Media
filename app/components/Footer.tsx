import Image from "next/image";

const Footer = () => {
    return (
        <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-zinc-800">
        <div className="mx-auto max-w-screen-xl text-center">
            <a href="#" className="flex justify-center items-center text-2xl font-semibold text-zinc-900 dark:text-white">
                <Image
                width={50}
                height={50}
                src="/logos/visionary-transparent-logo.png"
                alt="Visionary Studios Media Logo"
                className="p-1"
              />
                Visionary Studios Media    
            </a>
            <p className="my-6 text-zinc-500 dark:text-zinc-400">Helping YouTubers and Content creators to create better videos.</p>
            <ul className="flex flex-wrap justify-center items-center mb-6 text-zinc-900 dark:text-white">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Services</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Portfolio</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Testimonials</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
                </li>
            </ul>
            <span className="text-sm text-zinc-500 sm:text-center dark:text-zinc-400">© 2024 Visionary Studios Media™. All Rights Reserved.</span>
        </div>
      </footer>
  
    );
  };
  
  export default Footer;

