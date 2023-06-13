import jwt from "jsonwebtoken";
export function createJwtToken(student) {
    return jwt.sign(student, "MySecretKey" ,{ expiresIn: 300});

}
export async function authorisation(req,res,next) {
    const authHeader = req.headers.authorisation;
    console.log(authHeader);
    if (authHeader !== undefined){
        const bearerToken = authHeader.split(" ");
        const token = bearerToken[1];
        try {
            const payload = await veriyJwtToken(token);
            console.log(payload)
            req.payload = payload;
            next();
        }
        catch (error){
            console.log(error)
            res.send({
                Message: "error",
            });

        }
    }
    else {
        res.send({
            Message: "Unauthorised"
        });
    }
}
export async function veriyJwtToken(token) {
    return jwt.verify(token, "password");
}