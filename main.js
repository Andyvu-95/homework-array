// ---------  b1 lấy dữ liệu từ người dùng ----------

var arrduLieu = [];
var arrsoDuong = [];
var arrSoAm = []
var arrsoChan = [];
function nhapDuLieu (){
    var nhapSo = document.getElementById("nhapSo").value * 1
    arrduLieu.push(nhapSo)
    if(nhapSo > 0 & nhapSo % 1 == 0) {
        arrsoDuong.push(nhapSo)
    } 
    if (nhapSo < 0) {
        arrSoAm.push(nhapSo)
    }
    if (nhapSo % 2 == 0) {
        arrsoChan.push(nhapSo)
    }
    document.getElementById('hienThiDuLieu').innerHTML = `Arr: ${arrduLieu}`
    document.getElementById('formIput').reset();

}
document.getElementById('input').onclick = nhapDuLieu

// ---------------------------xử lí các case ---------------------------------

//Tổng số dương
function tongSoDuong () {
   var tongCongSoDuong = 0
    for(var i = 0; i < arrsoDuong.length; i++) {
        var soDuong = arrsoDuong[i]
        tongCongSoDuong = soDuong + tongCongSoDuong
    }
    document.getElementById('bangKetQua').innerHTML = `Tổng các số nguyên dương cộng lại bằng: ${tongCongSoDuong}`
}
document.getElementById('tongSoDuong').onclick = tongSoDuong


// đếm số dương
function demSoDuong () {
    var SoDuong = 0
    for (var i = 0; i < arrsoDuong.length; i++){
        SoDuong++;
    }
    document.getElementById('bangKetQua').innerHTML = `Trong mảng Arr có số nguyên dương là: ${SoDuong} số `
}
document.getElementById('demSoDuong').onclick = demSoDuong

// đếm số nguyên 
function demSoNguyen () {
    var SoNguyen = 0
    for (var i = 0; i < arrduLieu.length; i++){
        SoNguyen++;
    }
    document.getElementById('bangKetQua').innerHTML = `Trong mảng Arr có tổng ${SoNguyen} số, gồm số nguyên âm và số nguyên dương.`
}
document.getElementById('demSoNguyen').onclick = demSoNguyen;


// tính số nhỏ nhất
function soNhoNhat (){
    var min = arrduLieu[0]
    for(var i = 1; i < arrduLieu.length; i++) {
        var number = arrduLieu[i];
        if(number < min) {
            min = number
        }
    }
    document.getElementById('bangKetQua').innerHTML = ` Số nhỏ nhất trong mảng Arr là: ${min}`
}
document.getElementById('soNhoNhat').onclick = soNhoNhat

// số nguyên dương nhỏ nhất
function soDuongNhoNhat (){
    var minSoDuong = arrsoDuong[0]
    for(var i = 1; i < arrsoDuong.length; i++) {
        var number = arrsoDuong[i];
        if(minSoDuong > number) {
            minSoDuong = number
        }
    }
    if(minSoDuong === undefined ) {
        minSoDuong = `Không có số dương`
    }
    document.getElementById('bangKetQua').innerHTML = ` Số nguyên dương nhỏ nhất trong mảng Arr là: ${minSoDuong}`

}
document.getElementById('soDuongNhoNhat').onclick = soDuongNhoNhat

// Số Chẵn cuối cùng 
function soChanCuoiCung (){
    var soChan = arrsoChan[arrsoChan.length - 1]
    document.getElementById('bangKetQua').innerHTML = `số chẵn cuối cùng trong mảng là: ${soChan}`
}
document.getElementById('soChanCuoiCung').onclick = soChanCuoiCung 

// sắp xếp tắng dần
function sapXepTangDan(){
    var soTangDan = arrduLieu.sort((a, b) => a - b)
    document.getElementById('bangKetQua').innerHTML = `Arr: ${soTangDan}`
}
document.getElementById('sapXepTangDan').onclick = sapXepTangDan

// So sánh số âm và số dương
function soSanhSoAmDuong (){
    var nguyenDuong = arrsoDuong.length
    var nguyenAm = arrSoAm.length
    var soSanh = ``
    if (nguyenDuong > nguyenAm) {
        soSanh = `số nguyên dương > số nguyên âm`
    }
    else if (nguyenDuong < nguyenAm) {
        soSanh = `số nguyên dương < số nguyên âm`
    } 
    else if (nguyenDuong === nguyenAm) {
        soSanh = `số nguyên dương = số nguyên âm` 
    }
    document.getElementById('bangKetQua').innerHTML = soSanh
}
document.getElementById('soSanh').onclick = soSanhSoAmDuong

// số nguyên tố đầu tiên
function nguyenToDau (){
    var nguyenTo = `không có số nguyên tố`
    debugger
    for (var i = 0; i < arrsoDuong.length; i++) {
        var setMang = arrsoDuong[i]
        if ( setMang > 1 && setMang % 2 != 0 && setMang % 3 != 0 || (setMang === 3) || (setMang === 2) ) {
            nguyenTo = setMang
            break
        }
    }
    document.getElementById('bangKetQua').innerHTML = `Số nguyên tố đầu tiên trong mảng là : ${nguyenTo}`
}
document.getElementById('nguyenToDauTien').onclick = nguyenToDau