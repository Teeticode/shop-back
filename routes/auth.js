const router = require("express").Router();
const User = require("../models/User");


//Register
router.post('/register', async(req,res)=>{
    const user = await new User({
        username:'denno',
        email:"karanikateeti@gmail.com",
        password: "123456"
    });   
    try{

    }catch{
        
    }
    await user.save();
    res.send('ok')
})

module.exports = router;