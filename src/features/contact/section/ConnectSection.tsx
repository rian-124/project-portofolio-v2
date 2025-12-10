import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

export default function ConnectSection() {
  return (
    <section className="md:px-20 px-5">
      <div className="text-center font-mono font-bold md:text-5xl text-4xl text-yellow-500 p-5">
        <h1>LETS CONNECT WITH ME 👋</h1>
      </div>
      <div className="w-full md:flex md:flex-row flex flex-col py-5 gap-10">
        <div className="w-full md:w-1/2">
          <form action="" className="space-y-10">
            <div className="flex gap-10">
              <div className="w-full relative group">
                <input
                  type="text"
                  id="name"
                  name="nama"
                  placeholder="Nama"
                  data-error-id="name-error"
                  required
                  className="peer  border-b border-gray-400 p-3 w-full focus:outline-none  placeholder-transparent rounded-md"
                />
                <div className="h-0.5 bg-yellow-500 origin-center scale-x-0 peer-hover:scale-x-100 peer-focus:scale-x-100 transition-transform duration-300"></div>
                <label
                  htmlFor="name"
                  className="absolute left-0 top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:font-normal peer-valid:-top-5 peer-valid:text-xs peer-valid:font-normal transition-all duration-300"
                >
                  Nama
                  <span className="transition-colors duration-300  group-focus-within:text-red-500">
                    *
                  </span>
                </label>
                <p
                  id="name-error"
                  className="hidden peer-invalid:block text-xs mt-2 text-red-500"
                >
                  Isi nama terlebih dahulu.
                </p>
              </div>
              <div className="w-full relative group">
                <input
                  type="email"
                  id="E-mail"
                  name="email"
                  placeholder="E-mail"
                  data-error-id="Email-error"
                  required
                  className="peer  border-b border-gray-400 p-3 w-full focus:outline-none  placeholder-transparent rounded-md"
                />
                <div className="h-0.5 bg-yellow-500 origin-center scale-x-0 peer-hover:scale-x-100 peer-focus:scale-x-100 transition-transform duration-300"></div>
                <label
                  htmlFor="E-mail"
                  className="absolute left-0 top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:font-normal peer-valid:-top-5 peer-valid:text-xs peer-valid:font-normal transition-all duration-300"
                >
                  E-mail
                  <span className="transition-colors duration-300  group-focus-within:text-red-500">
                    *
                  </span>
                </label>
                <p
                  id="Email-error"
                  className="hidden peer-invalid:block text-xs mt-2 text-red-500"
                >
                  Isi Email terlebih dahulu, dan masukkan email yang valid.
                </p>
              </div>
            </div>
            <div className="w-full relative group">
              <textarea
                id="pesan"
                rows={5}
                name="body"
                placeholder="Masukkan saran, kritik, atau masukan..."
                data-error-id="pesan-error"
                required
                className="peer border-b border-gray-400 p-3 w-full focus:outline-none  placeholder-transparent resize-none"
              ></textarea>
              <div className="h-0.5 bg-yellow-500 -mt-2 origin-center scale-x-0 peer-hover:scale-x-100 peer-focus:scale-x-100 transition-transform duration-300"></div>
              <label
                htmlFor="pesan"
                className="absolute left-0 top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:font-normal peer-valid:-top-5 peer-valid:text-xs peer-valid:font-normal transition-all duration-300"
              >
                Pesan
              </label>
            </div>
            <button className="w-full text-xl rounded-xl border-b-8 border bg-yellow-500 text-black p-3">
              Kirim
            </button>
          </form>
        </div>
        <div className="md:py-10 md:hidden md:w-[16rem]">
          <div className="space-y-3 flex items-center flex-col">
            <div className="py-[2px] bg-yellow-500 w-42 h-1 rounded-full"></div>
            <div className="py-[3px] bg-white w-42 h-1 rounded-full self-start"></div>
          </div>
          <div className="p-3">
            <h1 className="text-4xl text-yellow-500 text-center font-mono font-bold">
              My Social Media
            </h1>
          </div>
        </div>
        <div className="w-full md:w-1/2 self-center grid md:grid-cols-2 grid-cols-1 justify-center gap-5">
          <a
            href=""
            className="md:flex md:items-center md:justify-start flex justify-center md:w-60 h-16 gap-3 border border-b-8 border-black text-black p-3 rounded-xl bg-yellow-500 text-2xl"
          >
            <BsInstagram size={32} /> Instagram
          </a>
          <a
            href=""
            className="md:flex md:items-center md:justify-start flex justify-center md:w-60 h-16 gap-3 border border-b-8 border-black text-black p-3 rounded-xl bg-yellow-500 text-2xl"
          >
            <BsLinkedin size={32} /> Linkdin
          </a>
          <a
            href=""
            className="md:flex md:items-center md:justify-start flex justify-center md:w-60 h-16 gap-3 border border-b-8 border-black text-black p-3 rounded-xl bg-yellow-500 text-2xl"
          >
            <BsGithub size={32} /> Github
          </a>
          <a
            href=""
            className="md:flex md:items-center md:justify-start flex justify-center md:w-60 h-16 gap-3 border border-b-8 border-black text-black p-3 rounded-xl bg-yellow-500 text-2xl"
          >
            <FaTiktok size={32} /> Tiktok
          </a>
        </div>
      </div>
    </section>
  );
}
