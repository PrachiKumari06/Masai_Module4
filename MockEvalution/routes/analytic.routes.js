import express from "express"
import fs from "fs"
const router=express.Router();

function readData(){
    const data=fs.readFileSync("db.json","utf-8")
    return JSON.parse(data)
}
router.get("/allorder",(req,res)=>{
    const data=readData();
    const a=data.orders;
const s = data.orders.length;
    res.status(200).json({
        data:a,
        message:"All order data fetched successfully with count "+s
    })
})
router.get("/cancelledorders",(req,res)=>{
    const data=readData();
    const a=data.orders.filter(t=>t.status=="cancelled");
    res.status(200).json({
        data:a,
        message:"Cancelled order data fetched successfully"
    })
})
router.get("/totalrevenue/:id", (req, res) => {
    const data = readData();

    const id = data.products.find(p => p.id == req.params.id);
    if (!id) return res.status(404).send("Product not found");

    const totalRevenue = data.orders
        .filter(o => o.productId == req.params.id)
        .reduce((acc, order) => acc + order.total_price, 0);

    res.status(200).json({
        total_revenue: totalRevenue,
        message: "Total revenue fetched successfully"
    });
});
export default router;