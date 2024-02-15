import jwt from "jsonwebtoken";
import qs from "querystring";

export const redirectRol = (context, roles) => {
  const { session } = qs.decode(context.req.headers.cookie, "; ");
  const data = jwt.decode(session);

  console.log(data);

  if (!data) {
    return {
      destination: "/auth/login",
    };
  }

  if (roles.includes(data.rol)) return;

  return {
    destination: "/",
  };
};
