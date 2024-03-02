import Component from '../models/component.model.js';

export const creatComponent= async (req, res)=> {
    const {name, code} = req.body;
    const component = new Component({
        name,
        code
    });
    
}   

export const getComponent= async (req, res)=> {
    res.send("Get Component");
}

export const updateComponent= async (req, res)=> {
    res.send("Update Component");
}

export const deleteComponent= async (req, res)=> {
    res.send("Delete Component");
}
// Path: server/controllers/component.controller.js