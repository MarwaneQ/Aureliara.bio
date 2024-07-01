import Image from "next/image";
import logo from "../assets/logo3.png";
import facebook from "../assets/Facebook.png";
import instagram from "../assets/Instagram.png";
import tiktok from "../assets/TikTok.png";
export const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-primary">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Image src={logo} alt="logo" width={100} height={100} />
          <div className="mt-6 lg:max-w-sm"></div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-primary ">
            Contacts
          </p>
          <h5 className="text-primary">We are here to help!</h5>
          <div className="flex">
            <p className="mr-1 text-primary">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
              06-59-48-01-08
            </a>
          </div>
          <div className="flex">
            <p className="mr-1">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
              aureliarabio@gmail.com
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide ">Social</span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://www.instagram.com/ur.aureliara/"
              target="_blank"
              className=" transition-colors duration-300 hover:text-deep-purple-accent-400">
              <Image src={instagram} alt="instagram" className="h-6 w-6" />
            </a>
            <a
              href="https://www.tiktok.com/@ur.aureliara?is_from_webapp=1&sender_device=pc"
              target="_blank"
              className=" transition-colors duration-300 hover:text-deep-purple-accent-400">
              <Image src={tiktok} alt="tiktok" className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61561571280114"
              target="_blank"
              className=" transition-colors duration-300 hover:text-deep-purple-accent-400">
              <Image src={facebook} alt="facebook" className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500"></p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-primary">
          © Copyright {date} <span className="font-bold">Aureliara</span> . All
          rights reserved.
        </p>
        {/* <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400">
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400">
              Terms &amp; Conditions
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};
