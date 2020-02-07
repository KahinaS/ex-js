import {membresDeLaFamille} from "./index.js";
import $ from 'jquery';

document.getElementById("mySelect").innerHTML =+ '<input type="text" id="myInput" oninput="myFunction()">' ;
export function button() {
    var x = document.getElementById("myInput").value;
    document.getElementById("demo").innerHTML = "You wrote: " + x;
  }
   
   
