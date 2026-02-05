export function calculateSomething(num) {
  return num * 2;
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('th-TH');
}

export function greetUser(name) {
  return `สวัสดี ${name}`;
}
