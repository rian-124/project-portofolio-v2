"use client";

import HeaderTitle from "~/components/shared/HeaderTitle";
import CertificateItem from "../components/CertificateItem";
import useSWR from "swr";
import { getCertificates } from "~/service/firebase/firebaseService";

export default function CertificatesPage() {
  const { data: certificates } = useSWR("certificates", () =>
    getCertificates()
  );

  return (
    <main>
      <section className="px-5 md:px-10 mb-10">
        <HeaderTitle className="md:w-[25rem]">MY CERTIFICATES</HeaderTitle>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          {certificates?.map((certificate, index) => (
            <CertificateItem
              key={index}
              title={certificate.title}
              issuer={certificate.issuer}
              link={certificate.link}
              image={certificate.preview}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
