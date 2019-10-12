export default async (req, res, next) => {
  const userEmail = req.headers.email;

  if(!userEmail) {
    return res.status(401).json({
      message: 'Email not provided',
      error: true
    });
  }

  req.userEmail = userEmail;

  return next();
};
