export const errorHandeler=((statusCode,message)=>{
    const error=new error()
    error.statusCode=statusCode
    error.message=message
    return error
})