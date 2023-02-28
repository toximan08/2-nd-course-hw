//Game 1

const season = () => {
  let month = Number(prompt(`Введите номер месяца:`));
  switch (month) {
    case 12:
    case 1:
    case 2:
      return alert(`Это зимний месяц`);
    case 3:
    case 4:
    case 5:
      return alert(`Это весенний месяц`);
    case 6:
    case 7:
    case 8:
      return alert(`Это летний месяц`);
    case 9:
    case 10:
    case 11:
      return alert(`Это осенний месяц`);
    default:
      return alert(`Введенные данные не верны, попробуйте еще раз`);
  }
};

//Game 2

const wordCheck = () => {
  let list = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];

  list = list.sort(() => Math.random() - 0.5);
  alert(list);
  let question1 = prompt(`Чему равнялся первый элемент массива?`);
  let question2 = prompt(`Чему равнялся последний элемент массива?`);
  if (
    question1.toLowerCase() == list[0].toLowerCase() &&
    question2.toLowerCase() == list.at(-1).toLowerCase()
  ) {
    alert(`Поздравляем! Вы ответили на оба вопроса! Победа!`);
  } else if (
    question1.toLowerCase() == list[0].toLowerCase() ||
    question2.toLowerCase() == list.at(-1).toLowerCase()
  ) {
    alert(`Вы были близки к победе!`);
  } else {
    alert(`Вы ответили неверно, попробуйте еще раз!`);
  }
};
