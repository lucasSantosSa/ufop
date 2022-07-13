module.exports = {
    
    async home(req, res){
        return res.json({"message": "Home"});
    },
    
    async dashboard(req, res){
        return res.json({"message": "Dashboard"});
    },
    
    async moreProjects(req, res){
        return res.json({"message": "MoreProjects"});
    },
    
    async contact(req, res){
        return res.json({"message": "Contact"});
    },

    async aboutUs(req, res){
        return res.json({"message": "AboutUs"});
    }

}
