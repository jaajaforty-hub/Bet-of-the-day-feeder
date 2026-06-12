import express from "express";
import bodyParser from "body-parser";
import {Pool} from "pg";


const app = express();
const port = 3000;

const db = new Pool({

    user:"postgres",
    host:"localhost",
    database:"sports",
    password:"1841",
    port:5432

});

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));


const teams =[
{
    name:"mary",
    country:"usa"
},{
     name:"Fortunate",
    country:"Canada"
},
{
    name:"mary",
    country:"usa"
},{
     name:"Fortunate",
    country:"Canada"
},
{
    name:"mary",
    country:"usa"
},{
     name:"Fortunate",
    country:"Canada"
}
]

app.get("/",(req,res)=>{res.render("backend.ejs",{teams:teams})});
app.get("/home",(req,res)=>{res.render("backend.ejs",{teams:teams})});
app.get("/monday",(req,res)=>{res.render("monday.ejs",{teams:teams})});
app.get("/tuesday",(req,res)=>{ res.render("tuesday.ejs")});
app.get("/wednesday",(req,res)=>{res.render("wednesday.ejs")});
app.get("/thurday",(req,res)=>{ res.render("thurday.ejs")});
app.get("/friday",(req,res)=>{ res.render("friday.ejs")});
app.get("/saturday",(req,res)=>{res.render("saturday.ejs")});
app.get("/sunday",(req,res)=>{ res.render("sunday.ejs")});




app.post("/monday", async (req, res) => {
    try {
        
        const queryText = `
            UPDATE monday 
            SET team = $1, country = $2, odd = $3, times = $4, probability = $5 
            WHERE id = $6`;

        // Team 1 - Node will wait for this to finish...
        await db.query(queryText, [
            req.body.name_team_one, req.body.country_team_one, 
            req.body.odd_team_one, req.body.time_team_one, 
            req.body.prob_team_one, 1
        ]);

     
        await db.query(queryText, [
            req.body.name_team_two, req.body.country_team_two, 
            req.body.odd_team_two, req.body.time_team_two, 
            req.body.prob_team_one, 2
        ]);

      
        await db.query(queryText, [
            req.body.name_team_three, req.body.country_team_three, 
            req.body.odd_team_three, req.body.time_team_three, 
            req.body.prob_team_three, 3
        ]);


        await db.query(queryText, [
            req.body.name_team_four, req.body.country_team_four, 
            req.body.odd_team_four, req.body.time_team_four, 
            req.body.prob_team_four, 4
        ]);
        let sucMessage = "Table uploading was successful."
        res.render("monday.ejs",{message:sucMessage});
        
    }catch (err) {

        let errMessage = "Uploading was not successful.All fiel must be filled or Enter 0"
        console.error(err);
        res.status(500).render("monday.ejs",{message:errMessage});
      
    }
});

app.post("/tuesday", async (req, res) => {
    try {
        
        const queryText = `
            UPDATE tuesday 
            SET team = $1, country = $2, odd = $3, times = $4, probability = $5 
            WHERE id = $6`;


        await db.query(queryText, [
            req.body.name_team_one, req.body.country_team_one, 
            req.body.odd_team_one, req.body.time_team_one, 
            req.body.prob_team_one, 1
        ]);

     
        await db.query(queryText, [
            req.body.name_team_two, req.body.country_team_two, 
            req.body.odd_team_two, req.body.time_team_two, 
            req.body.prob_team_one, 2
        ]);

      
        await db.query(queryText, [
            req.body.name_team_three, req.body.country_team_three, 
            req.body.odd_team_three, req.body.time_team_three, 
            req.body.prob_team_three, 3
        ]);

        await db.query(queryText, [
            req.body.name_team_four, req.body.country_team_four, 
            req.body.odd_team_four, req.body.time_team_four, 
            req.body.prob_team_four, 4
        ]);
        let sucMessage = "Table uploading was successful."
        res.render("tuesday.ejs",{message:sucMessage});
        
    }catch (err) {

        let errMessage = "Uploading was not successful.All fiel must be filled or Enter 0"
        console.error(err);
        res.status(500).render("tuesday.ejs",{message:errMessage});
      
    }
}); 
app.post("/wednesday", async (req, res) => {
    try {
        
        const queryText = `
            UPDATE wednesday 
            SET team = $1, country = $2, odd = $3, times = $4, probability = $5 
            WHERE id = $6`;

        await db.query(queryText, [
            req.body.name_team_one, req.body.country_team_one, 
            req.body.odd_team_one, req.body.time_team_one, 
            req.body.prob_team_one, 1
        ]);

     
        await db.query(queryText, [
            req.body.name_team_two, req.body.country_team_two, 
            req.body.odd_team_two, req.body.time_team_two, 
            req.body.prob_team_one, 2
        ]);

      
        await db.query(queryText, [
            req.body.name_team_three, req.body.country_team_three, 
            req.body.odd_team_three, req.body.time_team_three, 
            req.body.prob_team_three, 3
        ]);


        await db.query(queryText, [
            req.body.name_team_four, req.body.country_team_four, 
            req.body.odd_team_four, req.body.time_team_four, 
            req.body.prob_team_four, 4
        ]);
        let sucMessage = "Table uploading was successful."
        res.render("wednesday.ejs",{message:sucMessage});
        
    }catch (err) {

        let errMessage = "Uploading was not successful.All fiel must be filled or Enter 0"
        console.error(err);
        res.status(500).render("wednesday.ejs",{message:errMessage});
      
    }
});

app.post("/thurday", async (req, res) => {
    try {
        
        const queryText = `
            UPDATE thurday 
            SET team = $1, country = $2, odd = $3, times = $4, probability = $5 
            WHERE id = $6`;

        
        await db.query(queryText, [
            req.body.name_team_one, req.body.country_team_one, 
            req.body.odd_team_one, req.body.time_team_one, 
            req.body.prob_team_one, 1
        ]);

     
        await db.query(queryText, [
            req.body.name_team_two, req.body.country_team_two, 
            req.body.odd_team_two, req.body.time_team_two, 
            req.body.prob_team_one, 2
        ]);

      
        await db.query(queryText, [
            req.body.name_team_three, req.body.country_team_three, 
            req.body.odd_team_three, req.body.time_team_three, 
            req.body.prob_team_three, 3
        ]);


        await db.query(queryText, [
            req.body.name_team_four, req.body.country_team_four, 
            req.body.odd_team_four, req.body.time_team_four, 
            req.body.prob_team_four, 4
        ]);
        let sucMessage = "Table uploading was successful."
        res.render("thurday.ejs",{message:sucMessage});
        
    }catch (err) {

        let errMessage = "Uploading was not successful.All fiel must be filled or Enter 0"
        console.error(err);
        res.status(500).render("thurday.ejs",{message:errMessage});
      
    }
});

app.post("/friday", async (req, res) => {
    try {
        
        const queryText = `
            UPDATE friday 
            SET team = $1, country = $2, odd = $3, times = $4, probability = $5 
            WHERE id = $6`;

   
        await db.query(queryText, [
            req.body.name_team_one, req.body.country_team_one, 
            req.body.odd_team_one, req.body.time_team_one, 
            req.body.prob_team_one, 1
        ]);

     
        await db.query(queryText, [
            req.body.name_team_two, req.body.country_team_two, 
            req.body.odd_team_two, req.body.time_team_two, 
            req.body.prob_team_one, 2
        ]);

      
        await db.query(queryText, [
            req.body.name_team_three, req.body.country_team_three, 
            req.body.odd_team_three, req.body.time_team_three, 
            req.body.prob_team_three, 3
        ]);


        await db.query(queryText, [
            req.body.name_team_four, req.body.country_team_four, 
            req.body.odd_team_four, req.body.time_team_four, 
            req.body.prob_team_four, 4
        ]);
        let sucMessage = "Table uploading was successful."
        res.render("friday.ejs",{message:sucMessage});
        
    }catch (err) {

        let errMessage = "Uploading was not successful.All fiel must be filled or Enter 0"
        console.error(err);
        res.status(500).render("friday.ejs",{message:errMessage});
      
    }
});


app.post("/saturday", async (req, res) => {
    try {
        
        const queryText = `
            UPDATE saturday 
            SET team = $1, country = $2, odd = $3, times = $4, probability = $5 
            WHERE id = $6`;

     
        await db.query(queryText, [
            req.body.name_team_one, req.body.country_team_one, 
            req.body.odd_team_one, req.body.time_team_one, 
            req.body.prob_team_one, 1
        ]);

     
        await db.query(queryText, [
            req.body.name_team_two, req.body.country_team_two, 
            req.body.odd_team_two, req.body.time_team_two, 
            req.body.prob_team_one, 2
        ]);

      
        await db.query(queryText, [
            req.body.name_team_three, req.body.country_team_three, 
            req.body.odd_team_three, req.body.time_team_three, 
            req.body.prob_team_three, 3
        ]);


        await db.query(queryText, [
            req.body.name_team_four, req.body.country_team_four, 
            req.body.odd_team_four, req.body.time_team_four, 
            req.body.prob_team_four, 4
        ]);
        let sucMessage = "Table uploading was successful."
        res.render("saturday.ejs",{message:sucMessage});
        
    }catch (err) {

        let errMessage = "Uploading was not successful.All fiel must be filled or Enter 0"
        console.error(err);
        res.status(500).render("saturday.ejs",{message:errMessage});
      
    }
});


app.post("/sunday", async (req, res) => {
    try {
        
        const queryText = `
            UPDATE sunday 
            SET team = $1, country = $2, odd = $3, times = $4, probability = $5 
            WHERE id = $6`;

        await db.query(queryText, [
            req.body.name_team_one, req.body.country_team_one, 
            req.body.odd_team_one, req.body.time_team_one, 
            req.body.prob_team_one, 1
        ]);

     
        await db.query(queryText, [
            req.body.name_team_two, req.body.country_team_two, 
            req.body.odd_team_two, req.body.time_team_two, 
            req.body.prob_team_one, 2
        ]);

      
        await db.query(queryText, [
            req.body.name_team_three, req.body.country_team_three, 
            req.body.odd_team_three, req.body.time_team_three, 
            req.body.prob_team_three, 3
        ]);


        await db.query(queryText, [
            req.body.name_team_four, req.body.country_team_four, 
            req.body.odd_team_four, req.body.time_team_four, 
            req.body.prob_team_four, 4
        ]);
        let sucMessage = "Table uploading was successful."
        res.render("sunday.ejs",{message:sucMessage});
        
    }catch (err) {

        let errMessage = "Uploading was not successful.All fiel must be filled or Enter 0"
        console.error(err);
        res.status(500).render("sunday.ejs",{message:errMessage});
      
    }
});


app.listen(port,(req,res)=>{
    console.log(`connection on port ${port}`)
})