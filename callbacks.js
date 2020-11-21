var posts=[
    {title:"Post1",body:"This is post 1"},
    {title:"Post2",body:"This is post 2"},
]

function getposts(){
    let output="";
    setTimeout(()=>{
        posts.forEach((post)=>{
            output+=`Title=${post.title} and body=${post.body} `;
        })
        console.log(output);
    },1000);

}


function createpost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
}

createpost({title:"Post3",body:"This is post 3"},getposts);