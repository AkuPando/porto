import React from "react";
import { FOOTER_LINKS, SOCIAL_LINKS } from "../utils/constants";

const Footer = () => {
  return (
      <div className="mt-32 py-4 mx-auto lg:grid lg:grid-cols-12 px-6 row items-center">
        <div className="lg:col-span-4 flex lg:justify-start justify-center py-2">
          <p className="text-white text-xs">
            © 2025{" "}
            <a href="#" className="font-semibold">
              Irvando Aldo Renaldy
            </a>
            . All Right Reserved
          </p>
        </div>

        <div className="lg:col-span-4 flex justify-center py-2">
          {FOOTER_LINKS.map((item) => (
            <a
              key={item}
              href="#"
              className="px-5 py-2 rounded-full text-sm text-white/90 hover:bg-white/10 transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="lg:col-span-4 flex gap-6 lg:justify-end justify-center py-2">
          {SOCIAL_LINKS.map((social) => (
            <a key={social.icon} href={social.href}>
              <i className={`${social.icon} ri-2x`}></i>
            </a>
          ))}
        </div>
      </div>
  );
};

export default React.memo(Footer);
