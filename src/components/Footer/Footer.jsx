import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoChatboxOutline } from "react-icons/io5";
function Footer() {
  return (
    <footer className="py-6 bg-[#fafafa]">
      <div className="container">
        <div className="flex items-center justify-center gap-2 py-8 pb-8">
          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
            <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
            <p className="text-[12px] font-[500]">For all Orders Over $100</p>
          </div>
          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <PiKeyReturnLight className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
            <h3 className="text-[16px] font-[600] mt-3">30 Days Return</h3>
            <p className="text-[12px] font-[500]">For an Exchange Products</p>
          </div>
          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <BsWallet2 className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
            <h3 className="text-[16px] font-[600] mt-3">Secure Payment</h3>
            <p className="text-[12px] font-[500]">Payment Cards Accepted</p>
          </div>
          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <LiaGiftSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
            <h3 className="text-[16px] font-[600] mt-3">Special Gifts</h3>
            <p className="text-[12px] font-[500]">Our First Product Order</p>
          </div>
          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
            <h3 className="text-[16px] font-[600] mt-3">Support 24/7</h3>
            <p className="text-[12px] font-[500]">Contact Us Anytime</p>
          </div>
        </div>
        <hr />

        <div className="footer flex items-center py-8">
          <div className="part1">
            <h2 className="text-[20px] font-[600] mb-4">Contact Us</h2>
            <p className="text-[13px] font-[400] pb-4">
              Classyshop -Mega Super Store <br /> 507-Union Trade Center
              Ethiopia
            </p>
            <Link className="link text-[13px]" to="mailto:someone@example.com">
              sales@yourcompany
            </Link>
            <span className="text-[22px] font-[600] block w-full mt-3  mb-5 text-primary">
              (+251) 944-559-678
            </span>

            <div className="flex items-center gap-2">
              <IoChatboxOutline className="text-[40px] text-primary" />
              <span className="text-[16px] font-[600]">Online Chat</span>
              <br />
              Get Expert Help
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
