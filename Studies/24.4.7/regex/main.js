function testPhone() {
  console.log('clicked');

  // legal phone: 05xyyyyyyy

  // const regex = new RegExp('^05\d{8}$'); - Will not work
  //   const regex = new RegExp('^05\\d{8}$'); - redundant because of double backslash

  //   const regex = /^05\d{8}$/;
  const regex = /^05\d{8}$/;

  const phoneBox = document.getElementById('phoneBox');
  const phone = phoneBox.value;

  if (regex.test(phone)) {
    alert('phone is valid');
  } else {
    alert('phone is invalid');
  }
}
