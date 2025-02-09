import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actons";
import Image from "next/image";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <RegisterForm user={user}></RegisterForm>

          <div className="copyright py-12 flex items-center justify-center space-x-2 text-sm text-gray-600">
            <p>© {new Date().getFullYear()} All Rights Reserved</p>
            <span>|</span>
            <p className="font-semibold text-green-800">ASM Shad</p>
            <span>|</span>
            <p className="font-semibold text-green-800">CarePluse</p>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
