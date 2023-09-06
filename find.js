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
const getDoc=async()=>
{
    try
    {
        const result=await p1.find({name:"laksh"},{age:true,_id:false})//.find({name:"abc"}).select({age:true})
        console.log(result)
    }
    catch(err)
    {
        console.log(err)
    }
}
getDoc()