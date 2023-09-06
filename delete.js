const mg=require('mongoose')
mg.connect("mongodb://127.0.0.1:27017/asp")
.then(()=>
{
    console.log("successfully done")
})
.catch((err)=>
{
    console.error(err)
})
const mySchema=new mg.Schema(
    {name:{type:String,required:true},
    age:Number,
    gender:String,
    date:{type:Date,default:new Date()},
    status:Boolean}
)
const p1=new mg.model("User",mySchema)
const deleteDoc=async(i)=>
{
    try
    {
        const result=await p1.findByIdAndDelete({_id:i}) //.deleteMany({name:"sean"})
        console.log(result)
    }
    catch(err)
    {
        console.log(err)
    }
}
deleteDoc("64e988b57e4a6d7bae8b36bb") //no need of id
