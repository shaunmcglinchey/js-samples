function getShortMessages(messages) {
  return messages.filter((item) => item.message.length < 50)
    .map((item) => item.message);
  /*
  return messages.filter(function(item) {
    return item.message.length < 50
  }).map(function(item) {
    return item.message
  })
  */
}
module.exports = getShortMessages
