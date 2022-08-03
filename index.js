function dom(selector) {
    return document.querySelector(selector);
}

let arrayInteger = [];
let arrReadNumber = [];

//  Nhập mảng nguyên
dom("#btnArInteger").onclick = function () {
    console.log(123)
    //Đầu vào
    let numberInteger = +dom("#numberInput").value;
    arrayInteger.push(numberInteger);
    let str = " :  [" + arrayInteger.join(", ") + "]";
    dom("#arrayNumber").innerHTML = str;
}

//  Nhập mảng số thực
dom("#btnArReal").onclick = function () {
    console.log(123)
    //Đầu vào
    let ReadNumber = +dom("#numberInput_Is").value;
    arrReadNumber.push(ReadNumber);
    let str = " :  [" + arrReadNumber.join(", ") + "]";
    dom("#arrayReadNumber").innerHTML = str;
}

// Tổng các số nguyên đã nhập
dom("#btnPositiveTotal").onclick = function () {
    let total = arrayInteger.reduce((total, value) => {
        if (value >= 0) {
            return total + value;
        }
        return total;
    });

    let strTotal = `
    Tổng các số nguyên đã nhập :  
    ${total}    
`
    dom("#show").innerHTML = strTotal;
}
// đếm các số nguyên dương trong mảng

dom("#btnCountPositiveNumber").onclick = function () {
    let countsInteger = arrayInteger.filter((value, index) => {
        return value >= 0;
    });
    let strCountInteger = `
    Đếm số nguyên dương đã nhập :  
    ${countsInteger.length}    
`
    dom("#show").innerHTML = strCountInteger;
}

//Tìm số nhỏ nhất trong mảng
dom("#btnMinNumber").onclick = function () {
    let minIntegerX = [...arrayInteger]
    minIntegerX.sort((a, b) => a - b);
    let minInteger = minIntegerX[0];
    let strMinIntegerX = `
 Số nguyên nhỏ nhất trong mảng đã nhập :  
 ${minInteger}    
`
    dom("#show").innerHTML = strMinIntegerX;

}

// Tìm số dương nhỏ nhất trong mảng

dom("#btnMinPositiveNumber").onclick = function () {
    let positiveNumber = arrayInteger.filter((value, index) => {
        return value > 0;
    });
    let minpositiveNumber = positiveNumber.sort((a, b) => a - b);
    let minpositiveNumberX = minpositiveNumber[0];
    let strminpositiveNumber = `
 Số nguyên dương nhỏ nhất trong mảng đã nhập :  
 ${minpositiveNumberX}    
`
    dom("#show").innerHTML = strminpositiveNumber;

}

// Tìm số chẳn cuối cùng trong mảng
dom("#btnEvenInteger").onclick = function () {
    let evenInteger = arrayInteger.filter((value, index) => {
        return (value % 2 === 0);
    });
    let evenIntegerX = 0;
    if (evenInteger.length === 0) {
        evenIntegerX = -1;
    } else {
        evenIntegerX = evenInteger[evenInteger.length - 1];
    }
    let strEvenIntegerX = `
 Số chẳn cuối cùng trong mảng đã nhập :  
 ${evenIntegerX}    
`
    dom("#show").innerHTML = strEvenIntegerX;
}

// đổi chổ 2 giá trị theo vị trí 
dom("#btnChangeLocation").onclick = function () {
    let viTri1 = +dom("#location1").value;
    let viTri2 = +dom("#location2").value;
    console.log(arrReadNumber);
    let arrTemp = [...arrayInteger];
    [arrTemp[viTri1], arrTemp[viTri2]] = [arrTemp[viTri2], arrTemp[viTri1]]
    let strarrTemp = `
Đổi chổ phần tử ${viTri1}  sang phần tử ${viTri2} và ngược lại
 ${arrTemp}    
`
    dom("#show").innerHTML = strarrTemp;
}


// Sắp xếp mảng theo thứ tự tăng dần
dom("#btnSortAcess").onclick = function () {
    let arrayAcc = [...arrayInteger];
    arrayAcc.sort((a, b) => a - b);
    let strarrayAcc = `
 Sắp xếp mảng theo thứ tự tăng dần :  
 ${arrayAcc}    
`
    dom("#show").innerHTML = strarrayAcc;
}


// Tìm số nguyên tố đầu tiên
dom("#btnPrimeNum").onclick = function () {
    function ktSoNguyenTo(value) {
        let flag = true;
        if (value < 2) {
            flag = false;
        } else {
            for (let i = 2; i < value; i++) {
                if (value % i === 0) {
                    flag = false;
                    break;
                }
            }
        }
        return flag;
    }

    function PrimeNumber(arr) {
        let kt = false;
        let primeNums = 0;
        for (let i = 0; i < arr.length; i++) {
            kt = ktSoNguyenTo(arr[i]);
            if (kt === true) {
                primeNums = arr[i];
                break;
            } else {
                primeNums = -1;
            }
        }
        return primeNums;
    }
    let primeNum = PrimeNumber(arrayInteger);
    let strPrimeNum = `
 Số nguyên tố đầu tiên :  
 ${primeNum}    
`
    dom("#show").innerHTML = strPrimeNum;
}


// Đếm số nguyên trong mảng số thực

dom("#btnPositive").onclick = function () {
    let positiveReadNumber = arrReadNumber.filter((value, index) => {
        return (Number.isInteger(value));
    });
    let numberRead = positiveReadNumber.length;
    let strPositive = `
Đếm số nguyên trong mảng số thực :  
 ${numberRead}    
`
    dom("#show").innerHTML = strPositive;

}


// so sánh số lượng số nguyên dương và âm trong mảng

dom("#btnCompare").onclick = function (){
let positiveNumberInteger = arrayInteger.filter((value, index) => {
    return (Number.isInteger(value) && value > 0);
});

console.log("Mảng số nguyên dương : ", positiveNumberInteger);

let positiveNumbernegative = arrayInteger.filter((value, index) => {
    return (Number.isInteger(value) && value < 0);
});

console.log("Mảng số nguyên âm : ", positiveNumbernegative);

let strIntegerRead = "";
if (positiveNumberInteger.length === 0 || positiveNumbernegative.length === 0) {
    strIntegerRead = "Số âm hoặc số dương chưa có để so sánh"
} else if (positiveNumberInteger.length < positiveNumbernegative.length) {
    strIntegerRead = "Số nguyên dương ít hơn số nguyên âm";
} else if (positiveNumberInteger.length === positiveNumbernegative.length) {
    strIntegerRead = "Số nguyên dương bằng số nguyên âm";
} else {
    strIntegerRead = "Số nguyên dương nhiều hơn số nguyên âm";
}
    dom("#show").innerHTML = strIntegerRead + " trong mảng số nguyên";
}