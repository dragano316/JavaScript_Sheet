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


function createpost(post){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            posts.push(post);
            const error=false;

            if(!error){
                resolve();
            }
            else{
                reject("Something went wrong!");
            }
        },2000);
    })

}
createpost({title:"Post3",body:"This is post 3"})
.then(getposts)
.catch(err=>console.log(err));



//Promise.all


const promise1=Promise.resolve("Hello world");
const promise2=10;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'GoodBye');
})

Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));



//async await


async function init(){
    await createpost({title:"Post3",body:"This is post 3"});
    getposts();

}

init();