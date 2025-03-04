import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";

const Success = async ({
  searchParams,
  params: { userId },
}: {
  searchParams: { appointmentId?: string };
  params: { userId: string };
}) => {
  const appointmentId = searchParams?.appointmentId ?? "";
  const appointment = appointmentId
    ? await getAppointment(appointmentId)
    : null;

  const doctor = Doctors.find(
    (doc) => doc.name === appointment?.primaryPhysician
  );

  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href="/">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="h-10 w-fit"
          />
        </Link>

        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="success"
          />
          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-green-500">appointment request</span> has
            been successfully submitted!
          </h2>
          <p>We&apos;ll be in touch shortly to confirm.</p>
        </section>

        {appointment && (
          <section className="request-details">
            <p>Requested appointment details:</p>
            <div className="flex items-center gap-3">
              {doctor?.image && (
                <Image
                  src={doctor.image}
                  alt="doctor"
                  width={100}
                  height={100}
                  className="size-6"
                />
              )}
              <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
            </div>
            <div className="flex gap-2">
              <Image
                src="/assets/icons/calendar.svg"
                height={24}
                width={24}
                alt="calendar"
              />
              <p>
                {appointment.schedule
                  ? formatDateTime(appointment.schedule).dateTime
                  : "No schedule available"}
              </p>
            </div>
          </section>
        )}

        <Button variant="outline" className="shad-primary-btn" asChild>
          <Link href={`/patients/${userId}/new-appointment`}>
            New Appointment
          </Link>
        </Button>

        <div className="copyright py-12 flex items-center justify-center space-x-2 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
          <span>|</span>
          <p className="font-semibold text-green-800">ASM Shad</p>
          <span>|</span>
          <p className="font-semibold text-green-800">CarePulse</p>
        </div>
      </div>
    </div>
  );
};

export default Success;
