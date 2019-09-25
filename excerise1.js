function validatePassword()
{
var password1 =  document.getElementById("firstPassword").value;
var password2 = document.getElementById("secondPassword").value;


if(password1.length < 8)
{

  alert('Your password must be at least 8 characters long. Try again');
  return false;
}
if(password1 != password2)
{
  alert('Passwords invalid! Please try again.');
  return false;
}
else
{
  alert('Password Validated! Redirecting...');
  return true;
}
}
