const users = ["John Snow", "Emma Warm", "Kit Young", "Alf Sky", "Todd Howard", "Soul Spare", "Rick Astley", "Leo Spark"];
let pages = Math.ceil(users.length / 3) - 1;
let count = 0;

userList = () => {
  let list = '';
  let x;
  for (i = 0; i < 3; i++) {
    if (users.length < x + 2) {
      list += `<option></option>`;
    } else {
      x = 3 * count + i;
      list += `<option>${users[x]}</option>`;
    }
  }
  if (count == 0) {
    document.getElementById('back').disabled = true;
  } else if (count == pages) {
    document.getElementById('next').disabled = true;
  } else {
    document.getElementById('back').disabled = false;
    document.getElementById('next').disabled = false;
  }
  let select = `<select id="userList" size="3">${list}</select>`;
  document.getElementById('userList').innerHTML = select;
}

next.onclick = () => {
  count++;
  userList();
}

back.onclick = () => {
  count--;
  userList();
}

userList();
