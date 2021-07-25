const profile = React.DOM.div(null, React.DOM.img({
  src: "avatar.png",
  className: "profile"
}), React.DOM.h3(null, [user.firstName, user.lastName].join(" ")));