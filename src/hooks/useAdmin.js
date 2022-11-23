import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoadin, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://doctors-portal-server-pi-seven.vercel.app/users/admin/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoadin];
};
export default useAdmin;
