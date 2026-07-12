const API_KEY =
  'Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68Xwaj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N';

module.exports = (req, res, next) => {
  const apiKey = req.header('apiKey');

  if (!apiKey) {
    return res.status(401).json({
      message: 'API key is required.',
    });
  }

  if (apiKey !== API_KEY) {
    return res.status(401).json({
      message: 'Invalid API key.',
    });
  }

  next();
};