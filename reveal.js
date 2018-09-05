// $(function () {

//   var selector = ".reveal";
//   var percentageToScrollInBeforeRevealing = 20;

//   $(window).scroll(function () {

//     var pageTop = $(document).scrollTop();
//     var pageBottom = (
//           pageTop +
//           $(window).height() -
//           (
//             $(window).height() *
//             percentageToScrollInBeforeRevealing *
//             0.01
//           )
//         );

//     $(selector).each(function() {

//       if ($(this).offset().top < pageBottom) {
//         $(this).addClass("visible");
//       }

//     });

//   });

//   $(window).trigger("scroll");

// });
