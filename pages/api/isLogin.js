export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: req.cookies.b_name });
};
