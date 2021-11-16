const Homeslides = require('../models/homeslideModel')

const homeslideCtrl = {
    getHomeslides: async(req, res) =>{
        try {
            const homeslides = await Homeslides.find()
            res.json(homeslides)
            
           
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createHomeslide: async(req, res) =>{
        try {
            const {homeslide_id, title, description, button, images, link} = req.body;
            if(!images) return res.status(400).json({msg: "No image upload"})

            const homeslide = await Homeslides.findOne({homeslide_id})
            if(homeslide)
                return res.status(400).json({msg: "This homeslide already exists."})

            const newHomeslide = new Homeslides({
                homeslide_id, title, description, button, images, link
            })

            await newHomeslide.save()
            res.json({msg: "Created a homeslide"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteHomeslide: async(req, res) =>{
        try {
            await Homeslides.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Homeslide"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateHomeslide: async(req, res) =>{
        try {
            const {homeslide_id, title, description, button, images, link} = req.body;
            if(!images) return res.status(400).json({msg: "No image upload"})

            await Homeslides.findOneAndUpdate({_id: req.params.id}, {
                homeslide_id, title, description, button, images, link
            })

            res.json({msg: "Updated a homeslide"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}


module.exports = homeslideCtrl