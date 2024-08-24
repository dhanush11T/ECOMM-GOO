async function userLogout(req, res) {
    try {
        // Ensure the cookie options match those used when setting the cookie
        const options = {
            httpOnly: true,
            secure: true, // Ensure this matches how the cookie was originally set
            sameSite: "none", // This should match the setting in your login controller
            domain: "ecomm-goo-1hbf.vercel.app", // Or match the exact domain, or omit if it wasn't set
            path: '/' // This should match the setting in your login controller
        };

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
