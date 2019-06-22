
exports.get404Page = (req,res,next)=>{
    console.log("Page Not Found Middleware!", req.url);
    res.status(404).render('404', {
        docTitle: '404 Not Found',
        path: req.url
        /*, layout: false*/
    });
};