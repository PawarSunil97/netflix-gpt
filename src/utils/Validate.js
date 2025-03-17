export const checkValidData=(name,email,password)=>{
  const isValidUserName = /^[a-zA-Z\-]+$/.test(name)
  const isvaliEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  if(!isValidUserName) return "Enter valid username"
  if(!isvaliEmail) return "Email is invalid";
  if(!isPasswordValid) return "Password is not currect";
  return null
}