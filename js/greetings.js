currentTime=new Date();
if(currentTime.getHours()<12)
document.write("<p>Good Morning, Rafal </p>");
else if(currentTime.getHours()<18)
document.write("<p>Good Afternoon, Rafal </p>");
else 
document.write("<p>Good Evening, Rafal </p>");