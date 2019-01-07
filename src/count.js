export function Count(body) {
this.wordCount = body.match(/[\S]+/g).length;
this.vowels =  body.match(/[aeiouAEIOU]+/g).length;
this.consonants = body.match(/[^aeiouAEIOU]+/g).length;
}
