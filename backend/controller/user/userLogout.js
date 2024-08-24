async function userLogout(req, res) {
    try {
        // Ensure the cookie options match those used when setting the cookie
        
        res.clearCookie("token", options); // Clear the token cookie

        res.status(200).json({
            message: "Logged out successfully",
            error: false,
            success: true,
            data: []
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = userLogout;
