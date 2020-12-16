const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// IP : ip1.ip2.ip3.ip4
const ip1 = urlParams.get('ip1')
const ip2 = urlParams.get('ip2')
const ip3 = urlParams.get('ip3')
const ip4 = urlParams.get('ip4')

function setAction(form) {
  form.action = "http://"+ip1 + "." + ip2 + "." + ip3 + "." + ip4 + "/rpi/image_manager.php";
  console.log(form.action)
  return true;
}
