const losowa = Math.floor(Math.random() * 5) + 1;
function check()
{
    text = document.getElementById("text");
    val = document.getElementById("argument").value;
    if(val == losowa)
    {
        text.innerHTML = "Zgadles";
    }
    else
    {
        text.innerHTML = " Nie Zgadles";
    }
}