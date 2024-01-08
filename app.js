let select = document.querySelectorAll('.currency')


fetch('https://api.frankfurter.app/currencies')
.then(res => res.json())
.then(res => displayDropDown(res))




let displayDropDown = (result) =>{
   let curr = Object.entries(result)
   for(let i=0;i<curr.length;i++){
    let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
    // console.log(`<option value="${curr[i][0]}">${curr[i][0]}</option>`)
    select[0].innerHTML  += opt
    select[1].innerHTML  += opt
   }
    
}