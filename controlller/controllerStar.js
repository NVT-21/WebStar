function controllerStar() {
    let listStar = [{x:20,y:30}];

    return { 
        createStar: (req, res) => {
            const x = req.body.x;
            const y = req.body.y;
            if(!x||!y){
                return res.status(403).json({error: "Bạn chưa nhập tọa độ"})
            }
            else if (x<0 ||x>98 ||y<0 ||y>98){
                return res.status(403).json({error:"bạn nhập ngoài khoảng cho phép của tọa độ"})
            }
            const exists = listStar.some(item => item.x === x && item.y === y);
            if(exists){
                return res.status(403).json({error:"Tọa độ bạn nhập đã tồn tại "})
            }
            listStar.push({ x, y });
            res.status(200).send({status:"success",message:{x:x,y:y}});
        },
        getAllStar:(req,res,next)=>{
           req.listStar = listStar
           next()

        }
    };
}

module.exports = controllerStar;
