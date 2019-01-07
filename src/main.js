import { Entry } from './journal';
import './styles.css';

$(document).ready(function() {
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry(title, body);
    var content = [entry.title, entry.body]
    var stats = []
    stats.push("Word Count:" + entry.wordCount, " Vowels:" + entry.vowels, " Consonants:" + entry.consonants)
    console.log(entry);
    console.log(stats);
    debugger;
    $('#content').append("<h3>" + entry.firstSentence + "</h3>");
    content.forEach(function(element) {
      $('#content').append("<p>" + element + "</p>");
    });
    stats.forEach(function(stat) {
      $('#content').append("<p>" + stat + "</p>");
    });
  });
});
