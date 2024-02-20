import jwt from "jsonwebtoken";
import qs from "querystring";

export const redirectRol = (context, roles) => {
  const { session } = qs.decode(context.req.headers.cookie, "; ");

  let data;
  try {
    data = jwt.verify(session, process.env.JWT_SECRET);
  } catch (error) {}

  if (!data) {
    const { url } = context.req;
    const query = qs.stringify({ redirectTo: url });
    return {
      destination: `/auth/login?${query}`,
    };
  }

  if (roles.includes(data.rol)) return;

  return {
    destination: "/",
  };
};
