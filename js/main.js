let renderTaleDSSV = () => {
  sinhVienService
    .layDanhSachSinhVien()
    .then((res) => {
      convertedArr = res.data.map((item) => {
        let { name, email, toan, ly, hoa, id } = item;
        return new SV(name, email, toan, ly, hoa, id);
      });
      console.log("convertedArr", convertedArr);
      sinhVienControllers.renderTable(convertedArr);
    })
    .catch((err) => {
      console.log("err", err);
    });
};
renderTaleDSSV();
document.getElementById("btn-add").addEventListener("click", function () {
  let svOject = sinhVienControllers.layThongTinTuForm();
  console.log(svOject);
  let isValid =
    // validator.kiemTraDoDai(svOject.name, "spanTenSV") &
    validator.kiemTraKiTu(svOject.name, "spanTenSV") &
    validator.kiemTraSo(svOject.id, "spanMaSV") &
    validator.kiemTraEmail(svOject.email, "spanEmailSV") &
    validator.kiemTraDiem(svOject.toan, "spanToan") &
    validator.kiemTraDiem(svOject.ly, "spanLy") &
    validator.kiemTraDiem(svOject.hoa, "spanHoa");
  isValid &&
    sinhVienService
      .themSinhVien(svOject)
      .then((res) => {
        renderTaleDSSV();
      })
      .catch((err) => {
        console.log(err);
      });
});

function xoaSV(id) {
  sinhVienService
    .xoaSinhVien(id)
    .then((res) => {
      renderTaleDSSV();
    })
    .catch((err) => {
      console.log(err);
    });
}
