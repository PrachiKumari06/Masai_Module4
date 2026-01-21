import express from 'express'
import fs from 'fs';

const router=express.Router();
function readData(){
    const data=fs.readFileSync('db.json',"utf-8")
    return JSON.parse(data);
}
function writeData(data){
        fs.writeFileSync("db.json",JSON.stringify(data,null,2))
}
router.get("/",(req,res)=>{
    const data=readData();
    res.status(200).json({
        data:data.orders,
        message:"Data Fetch Successfully"
    })
})
router.post("/add", (req, res) => {
  const data = readData();
  const a= data.products.find(p => p.id == req.body.productId);

  if (!a) {
    return res.status(404).send("Product not found");
  }
  if (a.stock <= 0 || a.stock < req.body.quantity) {
    return res.status(400).send("Insufficient stock");
  }
  const newOrder = {
    id: req.body.id,
    productId: req.body.productId,
    quantity: req.body.quantity,
    total_price: a.price * req.body.quantity,
    status: "placed",
    created_at: new Date().toISOString()
  };
 a.stock -= req.body.quantity;
  data.orders.push(newOrder);
  writeData(data);

  res.status(201).json({
    message: "Order placed successfully",
    order: newOrder
  });
});

router.patch("/change-status/:id",(req,res)=>{
    const data=readData();
    const a=data.orders.find(t=>t.id==req.params.id)
    if(!a)return res.status(404).send("Order not found")  //we can use res.send 
    a.status=req.body.status
    writeData(data)
    res.status(200).json({
        message:"Order status updated successfully"
    })
})
router.delete("/:id",(req,res)=>{
    const data=readData();
    const a=data.orders.filter(t=>t.id==req.params.id)
    if(!a)return res.status(404).send("Order not found")  //we can use res.send
    if(a.status==="cancelled" || a.status==="delivered"){
         data.orders = data.orders.filter(t => t.id != req.params.id);
        writeData(data);

        res.status(200).json({
            message: "Order deleted successfully"
        });
    } else {
        res.status(400).send("Only cancelled or delivered orders can be deleted");
    }
})

export default router;

