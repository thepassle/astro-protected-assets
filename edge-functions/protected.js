export default async (req, ctx) => {
  const url = new URL(req.url);
  const protectedRoutes = new URLPattern({pathname: '/protected/:img'});
  const match = protectedRoutes.exec(url);

  const auth = url.searchParams.has('auth');

  if(match && !auth) return new Response(null, {status: 403});
  return await ctx.next();
};

