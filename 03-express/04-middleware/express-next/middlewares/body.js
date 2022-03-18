// buat fungsi cek jika object kosong
function isEmpty(obj) {
    return !obj || Object.keys(obj).length === 0;
}

module.exports = (req, res, next) => {
  // Jika object req.body kosong kita skip middleware ini
  // Maka lanjutkan ke route berikutnya (jika ada)
  if (isEmpty(req.body)) next('route');

  // Jika object req.body tidak kosong kita tampilkan body request
  console.log("Body: ", req.body);
  // Maka lanjutkan ke middleware berikutnya (jika ada)
  next();
};