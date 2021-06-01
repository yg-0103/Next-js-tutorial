export default (req, res) => {
  if (req.method === 'POST') {
    res.setHeader(
      'Set-Cookie',
      `b_name=${req.body.id};Max-Age=3600;HttpOnly,Secure`
    );
    res.statusCode = 200;
    res.json({ message: 'ok', user: req.body });
  }
};
