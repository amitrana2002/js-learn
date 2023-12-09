const text=document.getElementById("desc");
const select=document.getElementById("Car");

select.addEventListener("change",apply);

function apply()
{
  const option=select.value;
  
  switch (option) {
    case "Swift":
      text.textContent=`Swift is the best car for the small families`;
      break;
    
    case "Fortuner":
      text.textContent=`Fortuner is best for the big families and a high net worth`;
        break;

      case "Bolero":
        text.textContent=`Bolero is best for the rural areas`;
        break;

        default:
      text.textContent=`Please Select any car for purchasing`
  }
}
