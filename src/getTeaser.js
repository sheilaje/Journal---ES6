export function getTeaser(body){
  this.firstSentence = body.match(/^(.*)[.!?]\s/)[0];
  // var firstSentence = body.match(/^(.*)[.!?]\s/).length;
  if (this.firstSentence.split(' ').length > 8) {
    this.firstSentence = this.firstSentence.trim().split(' ').slice(0,8).join(' ');
  }
}
