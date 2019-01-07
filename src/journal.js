export function Entry(title, body) {
  this.title = title;
  this.body = body;
  this.wordCount = body.match(/[\S]+/g).length;
  this.vowels =  body.match(/[aeiouAEIOU]+/g).length;
  this.consonants = body.match(/[^aeiouAEIOU]+/g).length;
  this.firstSentence = body.match(/^(.*)[.!?]\s/)[0];
  // var firstSentence = body.match(/^(.*)[.!?]\s/).length;
  if (this.firstSentence.split(' ').length > 8) {
    this.firstSentence = this.firstSentence.trim().split(' ').slice(0,8).join(' ')
  }

  // var content = [];
  // content.push(title, body)
  // debugger;
  return title + body;
}
