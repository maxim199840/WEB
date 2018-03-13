function checkform() {
  if(!firstName.value.match(/^[A-Za-zА-Яа-я]+$/)){
    firstName.classList = 'form-control is-invalid';
  }
  else{
    firstName.classList = 'form-control is-valid'
  }
  if(!lastName.value.match(/^[A-Za-zА-Яа-я]+$/)){
    lastName.classList = 'form-control is-invalid';
  }
  else{
    lastName.classList = 'form-control is-valid'
  }
  if(!address.value.match(/\d{5}/)){
    address.classList = 'form-control is-invalid';
  }
  else{
    address.classList = 'form-control is-valid'
  }
  if(!email.value.match('@')){
    email.classList = 'form-control is-invalid';
  }
  else{
    email.classList = 'form-control is-valid'
  }
}