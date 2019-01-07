import { Entry } from './journal';
import { Count } from './count';
import { getTeaser } from './getTeaser';
import './styles.css';

$(document).ready(function() {
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry(title, body);
    var count = new Count(body);
    console.log(count);
    var teaser = new getTeaser(body);
    console.log(teaser);
    var content = [entry.title, entry.body];
    var stats = [];
    stats.push("Word Count:" + count.wordCount, " Vowels:" + count.vowels, " Consonants:" + count.consonants);
    console.log(entry);
    console.log(stats);
    debugger;
    $('#content').append("<h3>" + teaser.firstSentence + "</h3>");
    content.forEach(function(element) {
      $('#content').append("<p>" + element + "</p>");
    });
    stats.forEach(function(stat) {
      $('#content').append("<p>" + stat + "</p>");
    });
  });
});
