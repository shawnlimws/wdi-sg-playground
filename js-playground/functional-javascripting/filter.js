function getShortMessages(messages) {
      // SOLUTION GOES HERE
      var mess = messages.map(function(x) {
        return x.message
      })
      return mess.filter(function(y) {
        if (y.length < 50) return y
      })
    }

    module.exports = getShortMessages
