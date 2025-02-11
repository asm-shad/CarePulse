import PatientForm from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === "true";
  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <PatientForm />

          <div className="mt-20 flex flex-col sm:flex-row justify-between items-center px-4 md:px-8">
            <p className="copyright py-4 flex items-center justify-center space-x-2 text-sm text-gray-600">
              <span>© {new Date().getFullYear()} </span>
              <span>|</span>
              <span className="font-semibold text-green-800">ASM Shad</span>
              <span>|</span>
              <span className="font-semibold text-green-800">CarePulse</span>
            </p>
            <Link
              href="/?admin=true"
              className="text-green-800 text-sm md:text-base mt-4 sm:mt-0"
            >
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
