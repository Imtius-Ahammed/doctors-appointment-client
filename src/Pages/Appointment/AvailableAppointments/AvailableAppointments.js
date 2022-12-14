import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Loading from "../../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);

  // anotherway
  // const {data:appointmentOptions=[]} = useQuery({
  //   queryKey:['appointmentOptions'],
  //   queryFn: ()=> fetch('https://doctors-portal-server-pi-seven.vercel.app/appointmentOptions')
  //   .then(res=>res.json())
  // });
  const date = format(selectedDate, "PP");

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-portal-server-pi-seven.vercel.app/v2/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="my-16">
      <p className="text-center text-secondary font-bold">
        Available Appointments on {format(selectedDate, "PP")}{" "}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-6">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
