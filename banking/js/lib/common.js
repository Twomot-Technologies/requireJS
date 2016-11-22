requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'jquery',
        banking_def:'../../Banking_Module/banking',
        customer_def:'../../Customer_Module/customer',
        treasury_def:'../../Treasury_Module/treasury'
    }
});

// Start the main app logic.
requirejs(['jquery'],
function   ($) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    console.log('require started');
    console.log($);
});