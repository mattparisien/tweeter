$(() => {
  const $follower = $("#follower");
  function followCursor(e) {
    TweenLite.to($follower, 1.5, {
      css: {
        left: e.pageX,
        top: e.pageY,
      },
    });
  }

  $(window).on("mousemove", followCursor);
});
