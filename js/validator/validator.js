let validator = {
  kiemTraSo: function (value, idErr) {
    errEl = document.getElementById(idErr);
    let parten = new RegExp("^(0|[1-9][0-9]*)$");
    if (parten.test(value)) {
      errEl.innerText = "";
      return true;
    } else {
      errEl.innerText = "Trường này phải điền số";
      return false;
    }
  },
  kiemTraKiTu: function (value, idErr) {
    errEl = document.getElementById(idErr);

    let parten = new RegExp("[A-Za-z]");
    if (parten.test(value)) {
      errEl.innerText = "";
      return true;
    } else {
      errEl.innerText = "Trường này phải điền chữ";
      return false;
    }
  },
  kiemTraDoDai: function (value, idErr) {
    errEl = document.getElementById(idErr);

    let length = value.trim().length;
    if (length < 5) {
      errEl.innerText = "Độ dài tối thiểu phải  lớn hơn 5";
      return false;
    }
    if (length > 15) {
      errEl.innerText = "Độ dài tối đa phải  bé hơn 15";
      return false;
    }
    errEl.innerText = "";
    return true;
  },

  kiemTraEmail: function (value, idErr) {
    errEl = document.getElementById(idErr);
    let parten = /\S+@\S+\.\S+/;

    console.log(parten.test(value));
    if (!parten.test(value)) {
      errEl.innerText = "Đây không phải là Email";
      return false;
    } else {
      errEl.innerText = "";
      return true;
    }
  },

  kiemTraDiem: function (value, idErr) {
    errEl = document.getElementById(idErr);

    if (value === "") {
      errEl.innerText = "Vui lòng nhập từ 0-10";
      return false;
    } else if (value * 1 >= 0 && value * 1 <= 10) {
      errEl.innerText = "";
      return true;
    } else {
      errEl.innerText = "Vui lòng nhập từ 0-10";
      return false;
    }
  },
};
