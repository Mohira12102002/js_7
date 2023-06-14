//Satr va manfiy bo'lmagan int n berilgan bo'lsa, asl satrning n nusxasi bo'lgan kattaroq qatorni qaytaring.

let text='hi'
let n=2
let newStr=""

for(let i=0; i<n; i++){
    newStr += text

}

console.log(newStr);


//Satr va manfiy bo'lmagan int n ni hisobga olsak, satrning old tomoni birinchi 3 ta belgi yoki satr uzunligi 3 dan kichik bo'lsa, u erda nima bo'lishidan qat'iy nazar aytamiz. Old qismining n nusxasini qaytaring.

let text1='chocolate'
let n1=3
let l=text1.length


let text2=text1.slice(0,3)
let newStr1= ''

for(let i=0; i<n1; i++){
    if(l>=3){
        newStr1 += text2
    }else if(l<3){
        newStr1 += text1
    }
}
console.log(newStr1);

//Berilgan qatordagi "xx" sonini hisoblang. Biz bir-birining ustiga chiqishga ruxsat berilganligini aytamiz, shuning uchun "xxx" tarkibida 2 ta "xx" mavjud.

let matn="mdnhtxxlwxax"
let count = 0;
    for (let i = 0; i < matn.length - 1; i++) {
      if (matn.substring(i, i + 2) === "xx") {
        count++;
      }
    }
    console.log(count);


//Agar satr berilgan bo'lsa, agar satrdagi "x" ning birinchi nusxasidan keyin darhol boshqa "x" bo'lsa, true qiymatini qaytaring.

let matn1='axxaxax'
let index=matn1.indexOf("x")


    if (matn1[index]=='x' && matn1[index+1]=='x') {
      console.log(true);
    }else{
        console.log(false);
    }
  
//Satr berilgan bo'lsa, birinchisidan boshlab har bir boshqa belgilardan tuzilgan yangi qatorni qaytaring, shuning uchun "Salom" "Hlo" ni beradi.

let str="Heeololeo"


    let result = "";
    for (let i = 0; i < str.length; i += 2) {
      result += str[i];
    }
    console.log(result)
  
  
  //"Code" kabi bo'sh bo'lmagan qator berilgan bo'lsa, "CCoCodCode" kabi qatorni qaytaring.

  let str1="Code"


  let result1 = "";
  for (let i = 0; i < str1.length; i++) {
    result1 += str1[i];
    console.log(result1);
  }


  //Satr berilgan boʻlsa, qatorda 2 uzunlikdagi pastki qator paydo boʻlish sonini va qatorning oxirgi 2 ta belgisi sifatida qaytaring, shuning uchun “hixxxhi” 1 hosil qiladi (biz oxirgi pastki qatorni hisoblamaymiz).

  
  
    let count1 = 0;
   let str2='hixxhi'
  
    const lastTwo = str2.slice(str2.length-2, str2.length);
    console.log(lastTwo);
  
    for (let i = 0; i < str2.length - 2; i++) {
      const substring = str2.slice(i, 2);
      if (substring === lastTwo) {
        count1++;
      }
    }
  
    console.log(count1);

//Ints massivi berilgan bo'lsa, massivdagi 9 ning sonini qaytaring.
 let arr=[1, 2, 9, 9]
  let count2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 9) {
      count2++;
    }
  }
  console.log(count2);



  
  //Ints massivi berilgan bo‘lsa, massivdagi dastlabki 4 ta elementdan biri 9 bo‘lsa, true qiymatini qaytaring. Massiv uzunligi 4 dan kichik bo‘lishi mumkin.

  let arr1=[1, 2, 9, 9]

    const endIndex = Math.min(4, arr1.length); 
    let index1=arr1.indexOf(9)
      if (arr1[index1] === 9) {
        console.log(true);
      }else{
  
          console.log(false);
      }

//Ints massivi berilgan bo'lsa, massivda biror joyda 1, 2, 3 raqamlar ketma-ketligi paydo bo'lsa, true qiymatini qaytaring.



let arr3=[1, 4, 1, 2]

let index2=arr3.indexOf(1,2,3)

      if (arr3[index2] === 1 && arr3[index2 + 1] === 2 && arr3[index2 + 2] === 3) {
        console.log(true);
      }else{
        console.log(false);
      }
  