
const express = require("express");
const Cat = require("../model/cat.js");
const router = new express.Router();



router.post("/addcat", async(req, res) => {
  console.log(req.body)
  const cat = new Cat(req.body);
  try {
    await cat.save();
    res.send(cat);
  } catch (e) {
    res.send(e);
  }
});

router.get("/getcats",async(req,res)=>{
    try{
        const cats=await Cat.find({})
        if(cats.length>0){
            res.send(cats)
        }else{
            res.send("Nocats exist!!")
        }
    }catch(e){
        res.send(e)
    }
})

router.get("/getcat/:id",async(req,res)=>{
    try{
        console.log(req.params)
        const cat=await Cat.findOne({_id:req.params.id})
        if(cat){
            console.log(cat)
            res.send(cat)
        }else{
            res.send("No cat exist with such id")
        }
    }catch(e){
        res.send(e)
    }
})

router.delete("/deletecat/:id",async(req,res)=>{
    try{
        const cat=await Cat.findByIdAndDelete({_id:req.params.id})
        if(cat){
            res.send(cat)
        }else{
            res.send("No cat")
        }

    }catch(e){
        res.send(e)
    }
})

router.patch("/updatecat/:id",async(req,res)=>{
    try{
        const cat=await Cat.findOneAndUpdate({_id:req.params.id},{$set:req.body})
        await cat.save();
        console.log(cat)
        res.send(cat)

    }catch(e){
        res.send(e);
    }
})


router.get("/filter",async(req,res)=>{
    try{
        console.log(req.body)
        // const cat=await Cat.find({name: {$in:req.body.name},color:{$in:req.body.color}})
        const cat=await Cat.find({$or:[{name:req.body.name},{color:req.body.color},{breed:req.body.breed},{dob:req.body.dob},{age:req.body.age},{sound:req.body.sound}]})

        console.log(cat)
        res.send(cat)

    }catch(e){
        res.send(e);
    }
})


router.get("/getuniqueprops",async(req,res)=>{
    let breed=[],color=[],sound=[];

    const cat=await Cat.find();

    console.log(cat.length)
    for(let i=0;i<cat.length;i++){
        if(!breed.includes(cat[i].breed)){
            breed.push(cat[i].breed)
        }
        if(!color.includes(cat[i].color)){
            color.push(cat[i].color)
        }
        if(!sound.includes(cat[i].sound)){
            sound.push(cat[i].sound)
        }
    }
    res.send({breed,color,sound})
})
module.exports = router;
