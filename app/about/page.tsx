import Image from "next/image";

export default function About () {
    return (
      <section className="p-10 flex flex-col justify-center">
        <div className="text-amber-100 text-center font-bold text-8xl p-20">
            <h1>Im Afrian.</h1>
        </div>
      <div className="flex gap-20 justify-center items-center">
          <div className="w-[384px] h-[384px] bg-amber-100 rounded-t-full overflow-hidden border-2 border-r-[10px]">
            <Image 
                src={'/image/aboutMe.png'}
                alt="aboutMe"
                width={384}
                height={384}
                className="object-cover mt-auto"
            />
        </div>
        <div className="w-1/2 flex gap-10 flex-col text-white">
            <h1 className="text-amber-100 text-4 xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam provident explicabo fugiat labore, corrupti sit voluptatum nam, in quaerat dolore nostrum reiciendis earum eius incidunt aspernatur obcaecati officiis voluptas! Officiis dolore placeat excepturi</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam provident explicabo fugiat labore, corrupti sit voluptatum nam, in quaerat dolore nostrum reiciendis earum eius incidunt aspernatur obcaecati officiis voluptas! Officiis dolore placeat excepturi sit omnis</p>
        </div>
      </div>
      </section>
    );
}