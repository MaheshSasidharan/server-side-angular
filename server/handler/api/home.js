const homeAPI = {
    getHomeData: (req, res) => {
        const itemNumber = req.query.itemNumber;

        if (itemNumber) {
            
                // return the JWT token for the future API calls
                res.json({
                    data: `From server: Returing ${itemNumber + 2}`
                });
            
        } else {
            res.json({
                data: `From server: No number received`
            });
        }
    }
}

module.exports = homeAPI;