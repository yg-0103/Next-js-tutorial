export default (req, res) => {
  res.setHeader(
    'Set-Cookie',
    `b_name=${req.body.id};Max-Age=0;HttpOnly,Secure`
  );
  res.statusCode = 200;
  res.json({ message: 'ok', user: req.body });
};
