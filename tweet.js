class Tweet {
  constructor(sender,message,link='no link provided',likes=0,retweets=0,replies=[],replyCount=0){
    this.sender = sender
    this.content = message
    this.link = link
    this.likes  = likes
    this.retweets = retweets
    this.replies = replies
    this.replyCount = replyCount
  }
  like(){
    this.likes++
  }
  retweet(){
    this.retweets++
  }
  reply(replyMessage){
    this.replies.push(replyMessage)
    this.replyCount++
  }
}

module.exports = Tweet;
