import Image from "next/image";
import HeaderTitle from "~/components/shared/HeaderTitle";
import ButtonLink from "~/components/ui/ButtonLink";

interface DetailProjectPageProps {
  params: {
    slug: string;
  };
}


export default function DetailProjectPage({ params } : DetailProjectPageProps) {

  console.log(params.slug);

  return (
    <main>
      <section className="md:px-10 px-5 mb-10">
        <div className="flex justify-between gap-3 items-center">
          <HeaderTitle className="md:w-[25rem]">Title Project</HeaderTitle>
          <ButtonLink
            href=""
            className="self-center text-center bg-yellow-500 uppercase text-black"
          >
            2022 - 2024
          </ButtonLink>
        </div>
        <div>
          <div className="grid md:grid-cols-6 grid-cols-3 gap-3 px-5">
            <ButtonLink
              href=""
              className="w-full text-center bg-yellow-500 uppercase text-black"
            >
              Typescript
            </ButtonLink>
            <ButtonLink
              href=""
              className="w-full text-center bg-yellow-500 uppercase text-black"
            >
              Typescript
            </ButtonLink>
            <ButtonLink
              href=""
              className="w-full text-center bg-yellow-500 uppercase text-black"
            >
              Typescript
            </ButtonLink>
            <ButtonLink
              href=""
              className="w-full text-center bg-yellow-500 uppercase text-black"
            >
              Typescript
            </ButtonLink>
            <ButtonLink
              href=""
              className="w-full text-center bg-yellow-500 uppercase text-black"
            >
              Typescript
            </ButtonLink>
            <ButtonLink
              href=""
              className="w-full text-center bg-yellow-500 uppercase text-black"
            >
              Typescript
            </ButtonLink>
          </div>
          <div className="w-full border-black p-5 text-justify">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, fugit a quos aliquid error vitae, dicta tempore minus
              quasi minima suscipit! Corporis sit totam fuga dolore tenetur
              nesciunt? Sint quos nisi iure fugit dicta cum autem odio.
              Temporibus et debitis animi quia eveniet velit, accusantium eius
              quas maxime sunt ab consequatur quibusdam? Provident, optio alias,
              quia minus modi quaerat architecto natus officia quam animi
              delectus dolorum fugit eius doloribus. Necessitatibus natus
              debitis autem tenetur saepe atque, nobis neque, repudiandae
              voluptas eius incidunt labore minima vero numquam distinctio?
              Fugit impedit placeat temporibus nam ratione rerum quos ab
              voluptates accusantium ipsum quas eligendi deserunt accusamus
            </p>
          </div>
        </div>
        <div className="px-5 space-y-5">
          <div
            className="relative border-2 border-black rounded-xl overflow-hidden"
          >
            {/* IMAGE */}
            <div className="w-full h-[30rem] relative">
              <Image
                src={`/image/education/education-1.jpg`}
                alt={"test"}
                fill
                className="object-cover"
              />
            </div>
            {/* CAPTION */}
            <div className="bg-yellow-500 rounded-b-xl p-3 absolute z-10 w-full bottom-0">
              <div className="flex gap-2 items-center">
                <span className="text-2xl font-mono font-bold px-3 md:px-5 py-[1px] bg-black text-white rounded-full">
                  Fitur login
                </span>
              </div>
            </div>
          </div>
          <div
            className="relative border-2 border-black rounded-xl overflow-hidden"
          >
            {/* IMAGE */}
            <div className="w-full h-[30rem] relative">
              <Image
                src={`/image/education/education-1.jpg`}
                alt={"test"}
                fill
                className="object-cover"
              />
            </div>
            {/* CAPTION */}
            <div className="bg-yellow-500 rounded-b-xl p-3 absolute z-10 w-full bottom-0">
              <div className="flex gap-2 items-center">
                <span className="text-2xl font-mono font-bold px-3 md:px-5 py-[1px] bg-black text-white rounded-full">
                  Fitur login
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
