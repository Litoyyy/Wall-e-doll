let editInfo = document.querySelectorAll('.editInfo')

$(document).ready(function() {
  $('.editInfo').click(function() {
    const subText = $('.subText');

    subText.each(function() {
      let editInfoMode = false;
      const el = $(this);

      if (editInfoMode) {
        $(editInfo).text("Изменить информацию");
        el.removeAttr('contentEditable');
      } else {
        $(editInfo).text("Применить");
        el.attr('contentEditable', true);
        el.focus();
      } 

      editInfoMode = !editInfoMode;
    });
  });
});

let redactList = document.querySelectorAll('.redactList')

$(document).ready(function() {
  $('.redactList').click(function() {
    const infoName = $('.infoName');

    infoName.each(function() {
      let redactListMode = false;
      const el = $(this);

      if (redactListMode) {
        $(redactList).text("Изменить информацию");
        el.removeAttr('contentEditable');
      } else {
        $(redactList).text("Применить");
        el.attr('contentEditable', true);
        el.focus();
      } 

      redactListMode = !redactListMode;
    });
  });
});


let editName = document.querySelectorAll('.editName')

$(document).ready(function() {
  $('.editName').click(function() {
    const studentName = $('.studentName');

    studentName.each(function() {
      let editNameMode = false;
      const el = $(this);

      if (editNameMode) {
        $(editName).text("Изменить имя");
        el.removeAttr('contentEditable');
      } else {
        $(editName).text("Применить");
        el.attr('contentEditable', true);
        el.focus();
      } 

      editNameMode = !editNameMode;
    });
  });
});


