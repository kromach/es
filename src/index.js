// 화살표 함수
const add = (a, b) => a + b;

const sum = add(3, 3);

console.log(sum);

//객체
const dog = {
  name: "멍멍이",
  age: 2
};

console.log(dog.name);

function print(animal) {
  const text = `${animal.name} (${animal.age}) 입니다`;

  console.log(text);
}

print(dog);

//비구조화 할당 방법 1
function print2(animal) {
  const { name, age } = animal; //객체 비구조화 할당
  const text = `${name} (${age}) 입니다`;

  console.log(text);
}

print2(dog);

//비구조화 할당 방법 2
function print3({ name, age }) {
  const text = `${name}, (${age}) 입니다`;

  console.log(text);
}

print3(dog);
