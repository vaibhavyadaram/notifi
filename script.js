//listens to button
document.getElementById("btn").onclick = function() {
    
//stores post into var
    var post = $("#post").val();
    
//prints post into console
    console.log(post);
    
//creates post and prints
    var holder = document.createElement("div");
    holder.id = "holder";

    var text = document.createElement("p");
    text.innerHTML = post;
    holder.appendChild(text);

    document.getElementById("content").appendChild(holder);
};

