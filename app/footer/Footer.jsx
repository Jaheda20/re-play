import React from "react";
import Image from "next/image";
import logo from "/app/logo.png";
import Link from "next/link";
import mastercardImg from "/app/images/mastercard.jpg";
import visacardImg from "/app/images/visa.jpg";
import paypalImg from "/app/images/paypal.jpg";

const Footer = () => {
  return (
    <div className=" bg-slate-700 text-slate-200 p-10">
      <div className="grid md:grid-cols-4 grid-col-2 gap-32">
        <aside>
          <div className="flex items-center gap-0">
            <Image src={logo} alt="logo re-shop" className="w-16 h-16" />
            <div className="flex flex-col items-start">
              <Link
                href={"/"}
                className="text-yellow-600 font-bold text-2xl tracking-wider uppercase"
              >
                Re-Play
              </Link>
              <p className="text-xs text-slate-200 font-medium">
                Fun Fresh Again
              </p>
            </div>
          </div>
          <p className="pl-2 font-medium mt-4">
            © {new Date().getFullYear()} - Re-Shop
            <br />
            All right reserved by Re-Shop
          </p>
        </aside>

        <nav className="flex flex-col space-y-2 ml-10">
          <h6 className="footer-title">Shopping</h6>
          <a className="link link-hover">My Account</a>
          <a className="link link-hover">Shipping</a>
          <a className="link link-hover">Order History</a>
          <a className="link link-hover">Return</a>
          <a className="link link-hover">Terms & Conditions</a>
        </nav>
        <nav className="flex flex-col space-y-2">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Sustainability</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col space-y-2">
          <h6 className="footer-title">Help</h6>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Selling</a>
          <a className="link link-hover">Buying</a>
        </nav>
      </div>
      <hr className="border border-dashed border-slate-600 mt-8" />
      <div className="flex items-center justify-between mt-4">
        <div className="">
          <ul className="flex space-x-6">
            <li>Terms</li>
            <li>Accessibility</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex gap-4">
          <Image
            src={mastercardImg}
            alt="logo mastercard"
            className="w-16 h-10 object-cover"
          />
          <Image
            src={visacardImg}
            alt="logo mastercard"
            className="w-16 h-10 object-cover"
          />
          <Image
            src={paypalImg}
            alt="logo mastercard"
            className="w-16 h-10 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
