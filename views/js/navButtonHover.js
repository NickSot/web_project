const dropButton = document.getElementById("navDropDown");
const dropDownMenu = document.getElementById("navDropDownContent");

// dropButton.onmouseover = () => {
//     dropDownMenu.style.display = "flex";
// }

dropButton.onclick = () => {
    if (dropDownMenu.style.display === "flex"){
        dropDownMenu.style.display = "none";
    }
    else{
        dropDownMenu.style.display = "flex";
    }
}