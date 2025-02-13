import Image from "next/image";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actons";

const Appointment = async ({ params }: { params: { userId: string } }) => {
  const { userId } = params; // Explicit destructuring
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            patientId={patient?.$id}
            userId={params.userId}
            type="create"
          />

          <div className="copyright py-12 flex items-center justify-center space-x-2 text-sm text-gray-600">
            <p>© {new Date().getFullYear()} All Rights Reserved</p>
            <span>|</span>
            <p className="font-semibold text-green-800">ASM Shad</p>
            <span>|</span>
            <p className="font-semibold text-green-800">CarePulse</p>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default Appointment;
