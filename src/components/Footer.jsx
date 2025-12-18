import React from "react";
import { SOCIAL_LINKS } from "../utils/constants";

const Footer = () => {
  return (
    <footer className="mx-auto px-4 sm:px-10 py-8">
      <div className="footer px-14 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8">
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Irvando<span style={{ color: "rgb(212,167,85)" }}>.</span>
            </h2>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              Seorang Full-Stack Software Engineer dari Pontianak, Indonesia
              dengan pengalaman lebih dari tiga tahun dalam mengembangkan
              aplikasi web end-to-end yang siap produksi.
            </p>
          </div>
        </div>

        <hr className="border-zinc-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6">
          <p className="text-sm text-zinc-400">
            © 2025 Irvando Aldo Renaldy. All rights reserved.
          </p>

          <div className="flex gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                target={social.target}
                rel={social.rel}
                className="w-12 h-12 flex items-center justify-center bg-zinc-800/50 hover:bg-zinc-700 rounded-lg transition-colors"
                aria-label={social.label}
              >
              {/* Old: <i className={`${social.icon} text-xl`}></i> */}
                <social.Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
