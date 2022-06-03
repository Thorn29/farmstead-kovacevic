export const validateCheckout = (data) => {

  const nameCheck = /^[A-Za-z\s]+$/;
  const emailCheck = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (data.ime.trim().length <= 0) {
    return { error: 'ime', code: 'e1'}
  }

  if (data.email.trim().length <= 0) {
    return { error: 'email', code: 'e2'}
  }

  if (data.adresa.trim().length <= 0) {
    return { error: 'adresa', code: 'e3'}
  }

  if (data.broj.trim().length <= 0) {
    return { error: 'broj', code: 'e4'}
  }

  if (!data.ime.match(nameCheck)) {
    return { error: 'ime', code: 'e5'}
  }

  if (!data.email.match(emailCheck)) {
    return { error: 'email', code: 'e6'}
  }

  if (!data.adresa.match(/\d/)) {
    return { error: 'adresa', code: 'e7'}
  }

  if (data.broj.trim().length !== 5) {
    return { error: 'broj', code: 'e8'}
  }

  else return;
}

export const validateContact = (data) => {

  const nameCheck = /^[A-Za-z\s]+$/;
  const emailCheck = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (data.ime.trim().length <= 0) {
    return { error: 'ime', code: 'e1'}
  }

  if (data.email.trim().length <= 0) {
    return { error: 'email', code: 'e2'}
  }

  if (data.poruka.trim().length <= 0) {
    return { error: 'poruka', code: 'c1'}
  }

  if (!data.ime.match(nameCheck)) {
    return { error: 'ime', code: 'e5'}
  }

  if (!data.email.match(emailCheck)) {
    return { error: 'email', code: 'e6'}
  }

  else return;
}
