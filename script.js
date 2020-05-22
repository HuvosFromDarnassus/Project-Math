var reloadButton = document.querySelector(".retry");

reloadButton.addEventListener("mousedown", reload);

function reload(e) {
  location.reload();
}

var count = 0;
DragManager.onDragEnd = function (dragObject, dropElem) {
  dragObject.elem.hidden = true;

  var cvs = document.querySelector(".results");
  var ctx = cvs.getContext("2d");
  ctx.fillStyle = "#4eb543";
  ctx.font = "40px PressPlay-regular";

  if (
    dragObject.elem.getAttribute("data-item-type") ==
    dropElem.getAttribute("data-item-type")
  ) {
    count++;
  } else {
    count--;
  }

  ctx.globalCompositeOperation = "copy";
  ctx.fillText(count + "/16", 50, cvs.height - 60);

  if (count == 16) {
    ctx.fillText("МОЛОДЕЦ", 10, cvs.height - 60);
  }
};

DragManager.onDragCancel = function (dragObject) {
  dragObject.avatar.rollback();
};
