import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct mailto link
    const mailtoLink = `mailto:irvandaaldo666@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    )}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="mx-auto px-4 sm:px-10 md:pt-28 pt-24 pb-20" id="contact">
      <div className="contact px-4 sm:px-8 md:px-14 lg:px-24 mx-auto">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl/tight font-bold mb-10 sm:mb-16 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Get in{" "}
          <span className="relative inline-block">
            <span className="relative z-10">touch</span>
            <span
              className="absolute bottom-1 left-0 w-full h-3 rounded-full z-0"
              style={{
                background:
                  "linear-gradient(to right, rgb(30,58,95), rgb(212,167,85))",
              }}
            ></span>
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
          <div
            className="space-y-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl/tight font-bold mb-4 sm:mb-6">
                <span className="text-[rgb(30,58,95)]">Let's</span>{" "}
                <span className="text-[rgb(212,167,85)]">talk</span>
              </h2>
              <p className="text-base/relaxed opacity-70 mb-8">
                Saya saat ini tersedia untuk mengerjakan proyek baru, jadi
                jangan ragu untuk mengirimi saya pesan tentang apa pun yang Anda
                ingin saya kerjakan. Anda bisa menghubungi kapan saja.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-zinc-800 rounded-lg">
                  <i className="ri-mail-line text-xl"></i>
                </div>
                <div>
                  <p className="text-sm opacity-50">Email</p>
                  <p className="font-medium">irvandaaldo666@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-zinc-800 rounded-lg">
                  <i className="ri-whatsapp-line text-xl"></i>
                </div>
                <div>
                  <p className="text-sm opacity-50">Phone</p>
                  <p className="font-medium">+62 895-3237-1713-6</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-zinc-800 rounded-lg">
                  <i className="ri-map-pin-line text-xl"></i>
                </div>
                <div>
                  <p className="text-sm opacity-50">Location</p>
                  <p className="font-medium">Pontianak, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:border-amber-500 transition-colors placeholder:text-zinc-600"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:border-amber-500 transition-colors placeholder:text-zinc-600"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Write your message here
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="8"
                className="w-full px-5 py-4 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:border-amber-500 transition-colors resize-none placeholder:text-zinc-600"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="relative w-full px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/20 overflow-hidden group cursor-pointer"
            >
              <span className="relative z-10 text-white">Submit now</span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to right, rgb(30,58,95), rgb(212,167,85))",
                }}
              ></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Contact);
