exports.getHome = async (req, res) => {
    
    try {
        res.status(200).send('Hello There!'); 
    } catch (error) {
        console.error(`Error fetching Home`, error);
        res.status(500).json({ message: "Internal server error" });
    }
};



